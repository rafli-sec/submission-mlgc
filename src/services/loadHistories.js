const { Firestore } = require('@google-cloud/firestore');
async function getData() {
  const db = new Firestore({ databaseId: '(default)' });

  const predictCollection = db.collection('predictions');
  const histories = (await predictCollection.get()).docs;
  if (histories.length === 0) {
    return [];
  }
  return histories.map((data) => ({ id: data.id, history: data.data() }));
}

module.exports = getData;
