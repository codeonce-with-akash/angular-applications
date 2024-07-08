import { Coach } from "./Coach";

export class CricketCoach implements Coach {
    
    getWorkDetails(): string {
        return "FROM CRICKET COACH!";
    }
    
}