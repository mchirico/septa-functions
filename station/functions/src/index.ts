import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//


const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();


export const trainView = functions.https.onRequest((request, response) => {

    //response.setHeader('Content-Type', 'application/json')
    response.setHeader('Cache-Control', 'no-cache')

    response.set('Access-Control-Allow-Origin', "*")
    response.set('Access-Control-Allow-Methods', 'GET, POST')


    const query = require('url').parse(request.url, true).query;

    if (!query.trainid) {
        response.status(200).send("need trainid")
        return
    }

    const trainRef = db.collection('trainView').doc(query.trainid);


    trainRef.get()
        .then(doc => {
            if (!doc.exists) {

                //const positionDummy = `{"geometry": {"type": "Point", "coordinates": [18.511196603187596, 48.477047112525049]}, "type": "Feature", "properties": {}}`
                response.status(200).send("No such document")
                console.log('No such document!');
            } else {
                // response.status(200).send("doc.data().Population: "+
                //     doc.data().Population)

                let lat = JSON.stringify(doc.data().Lat)
                let lon = JSON.stringify(doc.data().Lon)
                lat = lat.replace(/['"]+/g, '')
                lon = lon.replace(/['"]+/g, '')

                const position = `{"geometry": {"type": "Point", "coordinates": [${lon}, ${lat}]}, "type": "Feature", "properties": {}}`


                response.status(200).send(position)

                console.log('doc.data().Lat: ', doc.data().Lat)
                console.log('Document data:', doc.data());
            }
        })
        .catch(err => {
            response.status(200).send("Error getting document")
            console.log('Error getting document', err);
        });


});


export const helloWorld = functions.https.onRequest((request, response) => {

    response.set('Access-Control-Allow-Origin', "*")
    response.set('Access-Control-Allow-Methods', 'GET, POST')

    const cityRef = db.collection('cities').doc('LA');


    cityRef.get()
        .then(doc => {
            if (!doc.exists) {
                response.status(200).send("No such document!")
                console.log('No such document!');
            } else {
                // response.status(200).send("doc.data().Population: "+
                //     doc.data().Population)

                response.status(200).send(JSON.stringify(doc.data()))

                console.log('doc.data().Population: ', doc.data().Population)
                console.log('Document data:', doc.data());
            }
        })
        .catch(err => {
            response.status(200).send("Error getting document")
            console.log('Error getting document', err);
        });


    const docRef = db.collection('users').doc('const setDoc');

    docRef.set({
        first: 'Ada',
        last: 'Lovelace No assign',
        born: 1815
    });

});
