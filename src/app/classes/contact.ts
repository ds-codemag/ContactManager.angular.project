export class Contact {
    id: number;
    avatar: string;
    name: string;
    number: string;

    constructor(id, avatar, name, number) {
        this.id = id;
        this.avatar = avatar;
        this.name = name;
        this.number = number;
    }
}
