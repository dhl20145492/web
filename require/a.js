/**
 * Created by DELL on 2017/2/19.
 */
define(function () {
    function arraySort(arr) {
        arr.sort(function (a,b) {
            return a-b;
        });
        return arr;
    }
    return arraySort;

});