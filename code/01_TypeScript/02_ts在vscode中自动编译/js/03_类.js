// ts 中书写 js 中的类
;
(function () {
    // 定义一个类
    var Person = /** @class */ (function () {
        // 定义一个构造器函数
        function Person(firstName, lastName) {
            // 更新属性数据
            this.firstName = firstName;
            this.lastName = lastName;
            // 姓名
            this.fullName = firstName + ' ' + lastName;
        }
        return Person;
    }());
    // 定义一个函数
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 实例化对象
    var person = new Person('诸葛', '孔明');
    console.log(showFullName(person));
})();
