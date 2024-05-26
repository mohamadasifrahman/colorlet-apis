import { Request, Response } from "express";

export const createPalettes = async (req: Request, res: Response) => {

    const paletteReq = req.body;

    let newPalettes: any = [];

    for (const i of paletteReq) {
        newPalettes.push({
            palette_json_: i.palette,
            color_names_: i.colorNames ? i.colorNames.join(",") : null,
            tags_: i.tags ? i.tags.join(",") : null,
            styles_: i.styles ? i.styles.join(",") : null,
            topics_: i.topics ? i.topics.join(",") : null
        })
    }

};