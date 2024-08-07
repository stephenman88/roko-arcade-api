import { AppDataSource } from "../data-source";
import { Entity } from "typeorm";
import { GundamArsenalBaseCard } from "../entity/GundamArsenalBaseCard";
import { GundamArsenalBaseLink } from "../entity/GundamArsenalBaseLink";
import { GundamArsenalBaseSet } from "../entity/GundamArsenalBaseSet";
import { GundamArsenalBaseMS } from "../entity/GundamArsenalBaseMS";
import { GundamArsenalBaseSP } from "../entity/GundamArsenalBaseSP";
import Card from "../model/gab/Card";
import Link from "../model/gab/Link";
import Set from "../model/gab/Set";
import MSAbility from "../model/gab/MSAbility";
import PLAbility from "../model/gab/PLAbility";
import SPAbility from "../model/gab/SPAbility";

let InsertLink = async (Link: Link) => {
    await AppDataSource.createQueryBuilder()
        .insert()
        .into(GundamArsenalBaseLink)
        .values(Link)
        .execute()
}

let UpdateLink = async(NewLink: Link, columnName: string, searchValue: any) => {
    await AppDataSource.createQueryBuilder()
        .update(GundamArsenalBaseLink)
        .set(NewLink)
        .where(`${columnName} = :${searchValue}`, {searchValue})
        .execute();
}

let GetLinks = async(columnName: string, searchValue: any) => {
    if(columnName || searchValue){
        await AppDataSource.createQueryBuilder(GundamArsenalBaseLink, "table")
            .getMany();
    }else{
        await AppDataSource.createQueryBuilder(GundamArsenalBaseCard, "table")
            .where(`table.${columnName} = :${searchValue}`, {searchValue})
            .getMany();
    }
}

let DeleteLinks = async(columnName: string, searchValue: any) => {
    await AppDataSource.createQueryBuilder()
        .delete()
        .from(GundamArsenalBaseLink)
        .where(`${columnName} = :${searchValue}`, {searchValue})
}