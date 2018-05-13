import { User } from "./user";
import { Attendance } from "./attendance";

export class Event{
    id: string
    name: string
    description?: string
    creatorId: string
    location?: string
    locationLat?: number
    locationLong?: number
    inviteeList? : User[]
    adminList?: User[]
    type: string
    blogId?: string
    Attendance: Attendance[]
    recurring?: boolean
    date: Date
    time: Date

    constructor(){}

    // constructor(name, description, location, recurring, type){
    //     this.name = name;
    //     this.description = description;
    //     this.location = location;
    //     this.recurring = recurring;
    //     this.type = type;
    // }

}