import { Coach } from "./Coach";

export class FootballCoach implements Coach {

    getWorkDetails(): string {
        return "FROM FOOTBALL COACH!";
    }
}