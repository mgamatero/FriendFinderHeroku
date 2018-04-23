var path = require('path')
var fs = require('fs')

var friendsArray = [
    {
        name: "Thor",
        photo: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjI4Mzk4NjQwOF5BMl5BanBnXkFtZTgwNjMzOTcwNDI@._CR381,31,585,585_UX402_UY402._SY201_SX201_AL_.jpg",
        scores: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
    },
    {
        name: "Daenerys Targaryen",
        photo: "https://vignette.wikia.nocookie.net/p__/images/0/0d/Daenerys-Targaryen-daenerys-targaryen-34106854-1400-2100.jpg/revision/latest?cb=20130803010544&path-prefix=protagonist",
        scores: ['2', '2', '2', '2', '2', '2', '2', '2', '2', '2']
    },
    {
        name: "Conan O'Brien",
        photo: "http://www.nndb.com/people/397/000022331/conan-obrien-1-sized.jpg",
        scores: ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
    },
    {
        name: "Mickey Mouse",
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png",
        scores: ['4', '4', '4', '4', '4', '4', '4', '4', '4', '4']
    },
    {
        name: "Snow White",
        photo: "https://upload.wikimedia.org/wikipedia/id/thumb/6/68/Snow_White_Disney.jpg/250px-Snow_White_Disney.jpg",
        scores: ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
    },
    {
        name: "Darth Vader",
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Darth_Vader.jpg/220px-Darth_Vader.jpg",
        scores: ['4', '2', '1', '4', '1', '1', '2', '2', '2', '4']
    }
]



module.exports = function (app) {
    app.post("/api/friends", function (req, res) {
        friendsArray.push(req.body)
        console.log("Array length: " + friendsArray.length)
        console.log(friendsArray)    
        res.json(bestMatch())
    });
    app.get('/api/friends', function (req, res) {
        res.json(friendsArray)
    });
    function bestMatch() {
        var lowestDifference = 100
        var lowestDifferenceIndex = 0
        var actualDifference
        for (var i = 0; i < friendsArray.length - 1; i++) {
            actualDifference = getDifference(friendsArray[i].scores, friendsArray[friendsArray.length - 1].scores)
            console.log("actual Difference: " + actualDifference)
            if (actualDifference < lowestDifference) {
                lowestDifference = actualDifference
                lowestDifferenceIndex = i
                console.log("lowest Difference: " + lowestDifference)
                console.log("lowest index: " + lowestDifferenceIndex)
            }
        }
        return (friendsArray[lowestDifferenceIndex])
    }
}


function getDifference(arr1, arr2) {
    var totalDiff = 0
    for (var i = 0; i < arr1.length; i++) {
        totalDiff += Math.abs(parseInt(arr1[i]) - parseInt(arr2[i]))
    }
    return totalDiff
}



