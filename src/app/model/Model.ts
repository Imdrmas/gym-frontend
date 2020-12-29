export interface Gym {
    id: number,
    name: string,
    address: string,
    city: string,
    area: number,
    logo: string
}

export interface Payment {
    id: number,
    cost: number,
    date: any,
    duration: string
}

export interface Arbitrate {
    id: number,
    name: string
}

export interface Sport {
    id: number,
    name: string,
    description: string,
    photo: string,
    arbitrates: Arbitrate[],
    trains: Train[]
}

export interface SportsMan {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    sex: string,
    avatar: string,
}

export interface Worktime {
    id: any,
    day: string,
    timetable: any,
    start: any,
    end: any
}

export interface Train {
    id: number,
    name: string
}

export interface User {
    id: number;
    username: string;
    password: string;
    admin: boolean;

}