export class Student{
    constructor(
        fullName,
        nickName,
        age,
        gender,
        stateOfOrigin,
        hometown,
        school,
        departmentSlashCourse,
        level,
        hobbies,
        skills,
        favouriteFood,
        favouriteColour,
        careerGoal,
        shortBiography,
        picture,
        socialMediaLinks,
        contactInformation
    ){
        this.fullName = fullName;
        this.nickName = nickName;
        this.age = age;
        this.gender = gender;
        this.stateOfOrigin = stateOfOrigin;
        this.hometown = hometown;
        this.school = school;
        this.departmentSlashCourse = departmentSlashCourse;
        this.level = level;
        this.hobbies = hobbies;
        this.skills = skills;
        this.favouriteFood = favouriteFood;
        this.favouriteColour = favouriteColour;
        this.careerGoal = careerGoal;
        this.shortBiography = shortBiography;
        this.picture = picture;
        this.socialMediaLinks = socialMediaLinks;
        this.contactInformation = contactInformation;
    }

    getSkills(){
        return this.skills;
    }

    getHobbies(){
        return this.hobbies;
    }
}