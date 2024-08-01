import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {

    transform(value: any, search: string) {
        if (!search) { return value }
        return value.filter((item: { name: string; }) => {
            if (!item) { return }
            let name = item.name
            return name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
    }

}