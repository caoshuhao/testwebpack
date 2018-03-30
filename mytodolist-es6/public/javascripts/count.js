import $ from './jquery';

var count = function() {
    var data = localStorage.getItem("myplan");
    // console.time('countparse')
    data = JSON.parse(data);
    // console.timeEnd('countparse')
    var len1 = 0;
    var len2 = 0;
    for (var i = 0; i < data.length; i++) {

        if (data[i].done == false) {
            len1 += 1;
        } else {
            len2 += 1;
        }
    }
    $(".ongoing .listtop span:nth-child(2)").text(len1);
    $(".done .listtop span:nth-child(2)").text(len2);
}

export { count }