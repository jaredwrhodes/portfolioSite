
// el.addEventListener("mouseover", function(){
//    var el = document..className = "caption2";
// });

// els.addEventListener("mouseout", function(){
//     document.getElementsByClassName("inner").classList.remove("caption2");
// });
$(document).ready( function () {

    var Project = function(title, description, link, imgRef) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.imgRef = imgRef;
    };

    var cpr = new Project('CPR Website', 'Description of the CPR Site Here', 'http://www.worldtechacademy.com', 'assets/CPRSiteScreenshot.jpg');
    var cms = new Project('Mini-CMS', 'WordPress has nothing on this guy!', 'http://dight350.tardis-shoes.com/dewey/mini-cms/', 'assets/minicms.gif');

    var projectArray = [cpr, cms];

    function processArray(project){
        var aTag = document.createElement("a");
        aTag.setAttribute('href',project.link);
        aTag.id = project.title + '-' + 'link';
        document.getElementById('firstRow').appendChild(aTag);

        var outerDIV = document.createElement("div");
        outerDIV.className = 'col-md-4 hvr-float-shadow';
        outerDIV.id = project.title + '-' + 'outer';
        document.getElementById(project.title + '-' +'link').appendChild(outerDIV);

        var middleDIV = document.createElement("div");
        middleDIV.className = 'thumbnail';
        middleDIV.id = project.title + '-' + 'middle';
        document.getElementById(project.title + '-' +'outer').appendChild(middleDIV);

        var imgTag = document.createElement("img");
        imgTag.src = project.imgRef;
        imgTag.className = 'thumbnailimg';
        imgTag.id = project.title + '-' + 'img';
        //imgTag.setAttribute("data-src", "holder.js/360x270");
        document.getElementById(project.title + '-' +'middle').appendChild(imgTag);

        var innerDIV = document.createElement("div");
        innerDIV.className = 'caption';
        innerDIV.id = project.title + '-' + 'inner';
        innerDIV.innerHTML = '<h3>' + project.title + '</h3>' +
             '<p>' + project.description + '</p>' +
            "<a href='" + project.link + "'class='btn btn-primary'>Find Out More</a>";
        document.getElementById(project.title + '-' +'middle').appendChild(innerDIV);

        document.getElementById(project.title + '-' +'outer').addEventListener("mouseover", function(){
           var el = document.getElementById(project.title + '-' +'inner').className = "caption2";
           var el2 = document.getElementById(project.title + '-' +'img').className = "thumbnailHover";
        });
        document.getElementById(project.title + '-' +'outer').addEventListener("mouseout", function(){
           var el = document.getElementById(project.title + '-' +'inner').className = "caption";
           var el2 = document.getElementById(project.title + '-' +'img').className = "thumbnailimg";
        });
    }
    projectArray.forEach(processArray);
});