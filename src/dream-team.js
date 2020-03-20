module.exports = function createDreamTeam(members) {
    let dreamTeam = [];
    if (!Array.isArray(members)) {
        return false;
    }
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] == 'string') {
            let firsLetUpper = members[i].trim()[0].toUpperCase();
            dreamTeam.push(firsLetUpper);
        }
    }
    return dreamTeam.sort().join('');
};