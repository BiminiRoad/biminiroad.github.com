function init() {
	console.log('hello');
}

function sample5() {
  var data = {
    employees: [
    { firstName: "Christophe",
      lastName: "Coenraets"},
    { firstName: "John",
      lastName: "Smith"}
    ]};
  var template = "Employees:<ul>{{#employees}}<li>{{firstName}} {{lastName}}</li>{{/employees}}</ul>";
  var html = Mustache.to_html(template, data);
  $('#sampleArea').html(html);
}

function sample2() {
  $.getJSON('json/data.json', function(data) {
    var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
    var html = Mustache.to_html(template, data);
    $('#sampleArea').html(html);
  });
}