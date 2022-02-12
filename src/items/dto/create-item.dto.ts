import {IsInt, IsNotEmpty, IsString, MaxLength, Min} from "class-validator";
import {Type} from "class-transformer";

export class CreateItemDto{
    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    name :string

    @IsInt()
    @Min(1)
    // タイプをnumber型と認識させる
    @Type(()=> Number)
    price :number

    @IsString()
    @IsNotEmpty()
    description :string
}