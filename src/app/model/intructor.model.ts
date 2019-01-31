export class InstructorModel {
    id: number;
    firstName: string;
    lastName: string;
    isDeleted: boolean;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
}
