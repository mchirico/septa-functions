import {expect} from 'chai';
//const sinon = require('sinon');



const admin = require('firebase-admin');

// At the top of test/index.test.js
const test = require('firebase-functions-test')({
    databaseURL: 'https://septa-3f6ab.firebaseio.com',
    storageBucket: 'septa-3f6ab.appspot.com',
    projectId: 'septa-3f6ab',
}, './test/service-account.json');


const functions = require('firebase-functions');


describe('Cloud Functions', () => {
    let myFunctions;



    before(() => {


        myFunctions = require('../src/index.ts');



        const docRef2 = admin.firestore().collection('users').doc('stuff');
        docRef2.set({
            first: 'From Test2100',
            last: 'Give me some love!!',
            born: 1815
        });

    });

    after(() => {
        test.cleanup();
        // Reset the database.
        //admin.database().ref('messages').remove();
    });

    describe('helloWorld Headers', () => {
        it('should have Access-Control-Allow', (done) => {
            // A fake request object, with req.query.text set to 'input'
            const req = {query: {text: 'input'}};
            // A fake response object, with a stubbed redirect function which does some assertions
            const res = {

                set: (headerKey, headerValue) => {

                    expect(headerKey).to.be.equal('Access-Control-Allow-Origin');
                    expect(headerValue).to.be.equal('*');

                    done();
                }
            };
            myFunctions.helloWorld(req, res);
        });
    });


    describe('test0', () => {
        it('Should not error out', (done) => {

            const req = {query: {text: 'input'}};

            const expectedResponse = 'Error getting document'

            class Res {
                event: string;

                constructor(message: string) {
                    this.event = message;
                }

                checkValue() {
                    return "Hello, " + this.event;
                }

                status(a: string) {
                    this.event = " " + a
                    expect(a).to.be.equal(200);
                    return this;
                }

                send(b: string) {
                    this.event += " " + b

                    console.log("\n***********")
                    console.log(this.event);
                    console.log("\n***********")

                    expect(b).to.not.be.equal(expectedResponse);
                    done();

                }

                set(b: string) {
                    this.event += b
                }


            }

            const res = new Res("test");

            myFunctions.test0(req, res);
        }).timeout(2030);
    });


});


describe("A suite is just a function", function () {
    var a;

    it("and so is a spec", function () {
        a = true;
        expect(a).to.be.true;
    });
});

describe("Included matchers:", function () {

    it("The 'toBe' matcher compares with ===", function () {
        var a = 12;
        var b = a;

        expect(a).to.be.equal(b);
        expect(a).to.not.be.null;
    });
});
