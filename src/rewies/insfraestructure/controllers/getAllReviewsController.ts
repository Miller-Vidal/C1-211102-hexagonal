import { GetReviewAllUseCase } from "../../application/getAllReviewUseCase";
import { Request, Response } from "express";

export class GetAllReviewsController{

    constructor (readonly getReviewAllUseCase : GetReviewAllUseCase){}

    async listAllReviews(req:Request, res:Response){
        try {
            const reviews = await this.getReviewAllUseCase.getAllReviews();

            if (reviews) {
                return res.status(200).json({
                  status: "success",
                  data: reviews,
                  message: "Lista de libros obtenida exitosamente",
                });
              } else {
                return res.status(404).json({
                  status: "error",
                  data: [],
                  message: "No se encontraron libros",
                });
              }
        } catch (error) {
            return res.status(500).json({
                status: "error",
                data: [],
                message: "Error al obtener la lista de reseñas",
              });
        }
    }

}