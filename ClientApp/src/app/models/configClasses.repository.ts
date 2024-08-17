export class Filter {
    category?: string;
    related: boolean = false;
    reset() {
        this.related = false;
    }
   }