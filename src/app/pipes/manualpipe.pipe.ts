import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name:'manualpipe'
})
export class ManualPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        console.log(value);
        return value.toUpperCase();
    }
}