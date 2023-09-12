import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Address, Category, RealEstate } from "../../entities";

export const insertRealEstateQuery = async (
  realEstateData: any
) => {
  const addressRepository: Repository<Address> =
  AppDataSource.getRepository(Address);
  const categoryRepository: Repository<Category> =
  AppDataSource.getRepository(Category);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);


      const existingAddress = await addressRepository.findOne({
        where: {
          street: realEstateData.address.street,
          zipCode: realEstateData.address.zipCode,
          number: realEstateData.address.number,
          city: realEstateData.address.city,
          state: realEstateData.address.state,
        },
      });

      if (existingAddress) {
        throw new AppError("Address already exists", 409);
      }

  const addressData = realEstateData.address;
  delete realEstateData.address;

  const realEstateNotAddress =
    realEstateData;

  const newAddress = addressRepository.create({
    ...addressData,
  });
  await addressRepository.save(newAddress);

  const category = await categoryRepository.findOneBy({
    id: realEstateData.categoryId,
  });

  const newRealEstate = realEstateRepository.create({
    address: newAddress,
    ...realEstateNotAddress,
    category,
  });

  await realEstateRepository.save(newRealEstate);

  return newRealEstate;
};
