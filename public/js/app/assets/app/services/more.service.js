var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
var MoreService = (function () {
    function MoreService() {
        this.moreWorkshop = [{
                name: 'UI/UX Workshop',
                type: 'Technical Workshop',
                id: 'e11',
                description: 'The workshop will focus on the basics of UI and UX design, the tools used and demos will be presented. We will further discuss on the industry standards, scope for UI/UX artists, the future of the domain, etc. It will be a fun-filled interative workshop conducted by the alumni of VEC.<br>Registration Fee: 200 Rupees<br><br>Certificates substantiating successful completeion of workshop<br>Timing: 9am to 12am'
            }, {
                name: 'Competitive Programming',
                type: 'Technical Workshop',
                id: 'e12',
                description: 'Looking to excel in competitive programming and crack your dream company job, this program will give you all the tools and tips to get into competitive programming conducted by Manit Kapoor currently ranked 1 worldwide in <a class="p-link" href="https://www.hackerearth.com/codearena/leaderboard/">CodeArena</a> in HackerEarth.'
            }, {
                name: 'Python Programming and Introduction to Flask',
                type: 'Technical Workshop',
                id: 'e13',
                description: 'A brief introduction to Python with practical work covering various important concepts in Python allowing you to dive into Python world followed by a seminar about Flask, a Micro Web Development Framework to help in providing a path for developing web applications is Python<br>Registration Fee: 250 Rupees<br>Prerequisites: Beginner Knowledge about programming<br>Certificates substantiating successful completeion of workshop<br>Timing: 9am to 12am'
            }];
        this.moreTEvents = [{
                name: 'Workshops',
                type: 'Technical Event',
                id: 'e21',
                description: 'Click <a routerLink="/workshops" class="p-link"> here </a> to checkout our technical workshops'
            }, {
                name: 'Complete the Code',
                type: 'Techie Raft',
                id: 'e22',
                description: "A logic error is a bug in a program that causes it to operate incorrectly, but not to terminate abnormally. No, It's not about debugging. We're jere to make programming simpler, We will provide you the program as well as the output. All you've to do is to complete the core logic with which the program can execute correctly. <br>Members: Maximum 2"
            }, {
                name: 'Debugtron',
                type: 'Bug Wizard',
                id: 'e23',
                description: ' Detect the bug<br>Members: Maximum 2<br>Rounds: 2'
            }, {
                name: 'Paper Presentation',
                type: 'Idea Express',
                id: 'e24',
                description: 'Title:<br>Advances in Computer Science<br>Mail your paper with name, college name and department to <a class="p-link" href="mailto:submission@ozmenta2k17.com">submission@ozmenta2k17.com</a><br>Last date for submission is August 1. <br>Format: IEEE <br> Members: Maximum 3<br>Entry Fees: 500 Rupees'
            }, {
                name: 'Capture The Flag',
                type: 'Conquer It',
                id: 'e25',
                description: "Capture The Flag is an ethical hacking contest in which certain pieces of information called flags are hidden on servers, stored somewhere difficult to access.<br>Oz-CTF is a intermediate level CTF, competition focusing on web application security, cryptography , reverse engineering and application security. <br>Always wanted to learn hacking but don't know how where it all fits together ?? Oz-CTF is a good place to start. <br>Happy hacking.<h2>FAQ</h2> <br>1. Is it a team or individual event?  <br>Ans : we would advise you to be a team of 3 (max) and you can go solo if you prefer. <br>2. I am a complete beginner can I complete? <br>Ans : yes , learning is the most important concept of this CTF and it is structured in such a way that newbies and experts find this interesting. <br>3. Do I need laptop for CTF ? <br>Ans : it is preferable to have laptop but we will provide systems in our lab, if you don't have one. <br>4. Do I have to be in velammal to participate ? <br>Ans : yes , it is a local CTF so the server will be accessible only from our network. <br><br>Got something to clarify? Ping me at : <b><u>shivakishore@protonmail.com</u></b>"
            }, {
                name: 'Mobile App Mock-Up',
                type: 'Dummy App',
                id: 'e26',
                description: 'Participants are suppossed to come up with an innovative idea for an app. They dont need to have the knowledge of coding/programming. They have to do a presentation explaining their app (if possible show the wireframes and screen mock ups). The judges will give marks based on the problem solving thought process, creativity and friendly user interface'
            }];
        this.moreNTEvents = [{
                name: 'Photography',
                type: 'Steady Shot',
                id: 'e31',
                description: 'Master your aperture & freeze the juncture based on the given theme:<br>1.Beauty of Chennai<br>2.Wildlife<br>3.Natural Sceneries<br>4.Indoor Photography<br>Mail your photograph with name, college name and department to <a style="color:yellow;" md-button href="mailto:submission@ozmenta2k17.com">submission@ozmenta2k17.com</a> or DM your photographs to <a class="p-link" href="http://www.facebook.com/ozmenta2k17">OZmenta2K17 FB Page</a><br>Last date for submission is August 3'
            }, {
                name: 'Connexions',
                type: 'Non-Technical Event',
                id: 'e32',
                description: "Are you the kind of person who's able to bring together all the teey tiny details that you notice? Then, drop in with your mate to crack the clues we provide<br>Members: 2"
            }, {
                name: 'Meme Creation',
                type: 'Non-Technical Event',
                id: 'e33',
                description: 'Gear Up to showcase your Meme creation talent on OZmenta2K17<br>Three rounds will be conducted and the winners get exciting prizes'
            }, {
                name: 'Gaming',
                type: 'Race 2 Destiny',
                id: 'e34',
                description: 'Are you a gamer? Are you up for some real challenges? Then enroll to this event and win attractive prizes!<br>PC Games: <br>1. FIFA 17<br>2. Call of Duty<br>3. Blur<br>4. NFS Most Wanted<br>Mobile Games: <br>1. Mini Miltia<br>Indoor Games: <br>1. Box Cricket<br>Entry fees for each game is 50 Rupees.<br>Entery fees for Box Cricket is 100 Rupees.<br>League-wise winners will be announced in Box Cricket'
            }, {
                name: 'Pictionary',
                type: 'Non-Technical Event',
                id: 'e35',
                description: "Members: 2 <br> Description: Time to unleash the Picaso in you. Here's the opportunity where you can have all the fun in one place and prove your artistic talent too ;) (Not to worry if you're an amateur artist, you can still win :D)"
            }, {
                name: 'Surprise Event',
                type: 'Non-Technical Event',
                id: 'e36',
                description: 'Surpise!!!<br>Surprise!!!<br>Surprise!!!<br>Get ready to face our surprise tasks in front of Eruma Sani fame Vijay and Harija'
            }];
    }
    MoreService.prototype.getWMore = function () {
        return this.moreWorkshop;
    };
    MoreService.prototype.getTMore = function () {
        return this.moreTEvents;
    };
    MoreService.prototype.getNMore = function () {
        return this.moreNTEvents;
    };
    return MoreService;
}());
MoreService = __decorate([
    Injectable()
], MoreService);
export { MoreService };
