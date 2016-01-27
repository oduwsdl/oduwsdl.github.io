String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

$(document).ready(function(){

    $.get('https://api.github.com/users/oduwsdl/repos?per_page=100&sort=updated', function(data){
        data.forEach(function(project){
            if(project.name != 'oduwsdl.github.io'){
                var $item = $("<li>").addClass("repo grid-1");
                var pName = project.name;
                if(pName.indexOf('_') !== -1){
                    var nounderscore = pName.split('_');
                    pName = nounderscore[0].toProperCase() +' '+ nounderscore[1].toProperCase();
                } else {
                    pName = pName.toProperCase();
                }
                var $link = $("<a>").attr("href", project.html_url).appendTo($item);
                $link.append($("<h2>").text(pName));
                $link.append($("<h3>").text(project.language));
                $link.append($("<p>").text(project.description));
                $item.appendTo("#repos");
            }
        });
    });
});
