const factorial = (function () {
    // 중첩 함수: 내부에서 재귀 함수와 콜백 함수를 활용
    function compute(n, callback) {
        if (n <= 1) return callback(1);
        return compute(n - 1, function (result) {
            return callback(n * result);
        });
    }

    // IIFE를 사용하여 즉시 실행
    return function (n, callback) {
        return compute(n, callback);
    };
})();

// 사용 예시: 결과를 콘솔에 출력하는 콜백 함수 전달
factorial(5, function (result) {
    console.log("Factorial:", result); // 120 출력
});