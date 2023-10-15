class Triathlon {
    participants = {};
    listOfFinalist = [];
    constructor(competitionName) {
        this.competitionName = competitionName;
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        }

        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }
        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
        const completedCount = condition / 30;
        if (completedCount < 3) {
            return `${participantName} could only complete ${completedCount.toFixed(0)} of the disciplines`
        }

        const currentParticipant = this.participants[participantName];
        delete this.participants[participantName];
        this.listOfFinalist.push({ participantName, participantGender: currentParticipant });
        return `Congratulations, ${participantName} finished the whole competition`
    }

    rewarding(participantName) {
        let isExist = false;
        this.listOfFinalist.forEach(x => {
            if (x.participantName == participantName) {
                isExist = true;
            }
        });

        if (!isExist) {
            return `${participantName} is not in the current finalists list`;
        }

        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria) {
        if (this.listOfFinalist.length == 0) {
            return 'There are no finalists in this competition';
        }

        const listOfFinalistByCriteria = [];

        if (criteria == 'all') {
            let output = `List of all ${this.competitionName} finalists:\n`
            this.listOfFinalist.forEach((x, i) => {
                if (i == this.listOfFinalist.length - 1) {
                    output += `${x.participantName}`;
                } else {
                    output += `${x.participantName}\n`;
                }
            });

            return output;
        }

        this.listOfFinalist.forEach(x => {
            if (x.participantGender == criteria) {
                listOfFinalistByCriteria.push(x);
            }
        });

        if (listOfFinalistByCriteria.length == 0) {
            return `There are no ${criteria}'s that finished the competition`;
        } else {
            return `${listOfFinalistByCriteria[0].participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        }


    }
}

{
    // const contest = new Triathlon("Dynamos");

    // console.log(contest.addParticipant("Peter", "male"));

    // console.log(contest.addParticipant("Sasha", "female"));

    // console.log(contest.addParticipant("Peter", "male"));
}

{
    // const contest = new Triathlon("Dynamos");

    // console.log(contest.addParticipant("Peter", "male"));

    // console.log(contest.addParticipant("Sasha", "female"));

    // console.log(contest.addParticipant("George", "male"));

    // console.log(contest.completeness("Peter", 100));

    // console.log(contest.completeness("Sasha", 70));

    // console.log(contest.completeness("George", 20))
}

{
    // const contest = new Triathlon("Dynamos"); 
    // console.log(contest.addParticipant("Peter", "male")); 
    // console.log(contest.addParticipant("Sasha", "female")); 
    // console.log(contest.completeness("Peter", 100)); 
    // console.log(contest.completeness("Sasha", 70)); 
    // console.log(contest.rewarding("Peter")); 
    // console.log(contest.rewarding("Sasha"))
}

{
    // const contest = new Triathlon("Dynamos");

    // console.log(contest.showRecord("all"));
}

{
    // const contest = new Triathlon("Dynamos");

    // console.log(contest.addParticipant("Peter", "male"));

    // console.log(contest.addParticipant("Sasha", "female"));

    // console.log(contest.completeness("Peter", 100));

    // console.log(contest.completeness("Sasha", 90));

    // console.log(contest.rewarding("Peter"));

    // console.log(contest.rewarding("Sasha"));

    // console.log(contest.showRecord("all"));
}