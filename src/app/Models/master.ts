export class Master {
    id: number;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    profile: string;
    url: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
