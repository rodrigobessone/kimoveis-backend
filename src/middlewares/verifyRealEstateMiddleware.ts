import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";
import { RealEstate } from "../entities";

export async function verifyRealEstateMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction
  ) {

    const id: number = parseInt(req.params.id);

    const realEstateRepository: Repository<RealEstate> =
      AppDataSource.getRepository(RealEstate);

    let realEstate: RealEstate | null = await realEstateRepository.findOne({
      where: { id: id },
    });
  
    if (realEstate) {
      next();
    }
    throw new AppError("RealEstate not found", 404);
  }