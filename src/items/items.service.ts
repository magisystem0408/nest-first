import {Injectable} from '@nestjs/common';
import {Item} from "./item.model";
import {ItemStatus} from "./item-status.enum";

@Injectable()
export class ItemsService {
    private items: Item[] = [];

    findAll(): Item[] {
        return this.items
    }

    findById(id: string): Item {
        return this.items.find((item) => item.id === id)
    }

    create(item: Item): Item {
        // 配列に格納
        this.items.push(item)
        // 格納したものを返す
        return item
    }

    updateStatus(id:string): Item {
        const item = this.findById(id)
        item.status =ItemStatus.SOLD_OUT
        return item
    }

    delete(id :string):void{
        this.items =this.items.filter((item) => item.id !==id)
    }



}
