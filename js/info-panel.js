/* global AFRAME */
AFRAME.registerComponent('info-panel', {

    init: function () {
        var scene = document.querySelector("a-scene");

        var buttonEls = scene.querySelectorAll('.poiInteractable');

        this.poiImageEL;
        this.poiTitleEl = scene.querySelector('#poiTitle');
        this.poiDescriptionEl = scene.querySelector('#poiDescription');

        this.poiInfo = {
            cityhallButton: {
                title: 'Belfast City Hall',
                imgEl: document.querySelector('#poiCityHallImg'),
                description: "Belfast City Hall was commissioned to replace the Old Town Hall in Victoria Street.[3] The catalyst for change came in 1888 when Belfast was awarded city status by Queen Victoria. This was in recognition of Belfast's rapid expansion and thriving linen, rope-making, shipbuilding and engineering industries. During this period Belfast briefly overtook Dublin as the most populous city in Ireland.",
                url: 'cityhallVideo.mp4',
                bgimg: 'img/cityhall360.jpg'
            },
            cavehillButton: {
                title: 'Cave Hill',
                imgEl: document.querySelector('#poiCaveHillImg'),
                description: "For generations, Cave Hill has been synonymous with Belfast, with its imposing outline visible throughout the city. The landmark, named for the five caves located on the side of the cliffs, contains a wealth of natural, archaeological and historical features, including Belfast Castle. Its most famous feature, known locally as Napoleon's Nose, is believed to have been the inspiration for Jonathan Swift's novel, Gulliver's Travels.",
                url: 'cavehillVideo.mp4',
                bgimg: 'img/cavehill360.jpg'
            },
            cranesButton: {
                title: 'Samson and Goliath',
                imgEl: document.querySelector('#poiSamsonGoliathImg'),
                description: "Samson and Goliath are the twin shipbuilding gantry cranes situated at Queen's Island, Belfast, Northern Ireland.The cranes, which were named after the Biblical figures Samson and Goliath, dominate the Belfast skyline and are landmark structures of the city.Comparative newcomers to the city, the cranes rapidly came to symbolise Belfast in a way that no building or monument had hitherto done",
                url: 'sample.mp4',
                bgimg: 'img/cranes360.jpg'
            },

            titanicButton: {
                title: 'Titanic Exhibition',
                imgEl: document.querySelector('#poiTitanicImg'),
                description: "Belfast City Hall was commissioned to replace the Old Town Hall in Victoria Street.[3] The catalyst for change came in 1888 when Belfast was awarded city status by Queen Victoria. This was in recognition of Belfast's rapid expansion and thriving linen, rope-making, shipbuilding and engineering industries. During this period Belfast briefly overtook Dublin as the most populous city in Ireland.",
                url: 'cityhallVideo.mp4',
                bgimg: 'img/titanic360.jpg'
            },
            stormontButton: {
                title: 'Parliament Building',
                imgEl: document.querySelector('#poiBelfastCastleImg'),
                description: "Belfast City Hall was commissioned to replace the Old Town Hall in Victoria Street.[3] The catalyst for change came in 1888 when Belfast was awarded city status by Queen Victoria. This was in recognition of Belfast's rapid expansion and thriving linen, rope-making, shipbuilding and engineering industries. During this period Belfast briefly overtook Dublin as the most populous city in Ireland.",
                url: 'cityhallVideo.mp4',
                bgimg: 'img/stormont360.jpg'
            }
        };

        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        this.onVideoButtonClick = this.onVideoButtonClick.bind(this);

        for (var i = 0; i < buttonEls.length; ++i) {
            buttonEls[i].addEventListener('click', this.onMenuButtonClick);
            //console.log("Component(s) registered", buttonEls.id);
        }

        var sphere = scene.querySelector('#sphere');

        //var link = document.querySelector("#url");
        //link.addEventListener('click', this.onVideoButtonClick);

        //this.el.object3D.renderOrder = 9999999;
        //this.el.object3D.depthTest = false;
        console.log("Component(s) registered", buttonEls.length);
    },

    onMenuButtonClick: function (evt) {
        var poiInfo = this.poiInfo[evt.currentTarget.id];
        console.log("Clicked POI", evt.currentTarget.id);

        var panel = document.querySelector('#info-panel');
        var mainCamera = document.querySelector('#mainCamera');

        var rot = mainCamera.object3D.quaternion.clone();

        const initialPlanePosition = new THREE.Vector3(0, 0, -4);
        initialPlanePosition.applyQuaternion(rot);


        if (this.poiImageEL) { this.poiImageEL.object3D.visible = false; }
        this.poiImageEL = poiInfo.imgEl;
        this.poiImageEL.object3D.visible = true;

        this.poiTitleEl.setAttribute('text', 'value', poiInfo.title);
        this.poiDescriptionEl.setAttribute('text', 'value', poiInfo.description);
        panel.setAttribute('visible', true);
        panel.setAttribute('position', initialPlanePosition);

        //var video = document.querySelector("#video");
        //video.setAttribute('src', poiInfo.url);
        //video.pause();

        var exploreButton = document.querySelector('#exploreBtn');
        //this.onExploreButtonClick = this.onExploreButtonClick.bind(this);

        exploreButton.addEventListener('click', function () {
            console.log(poiInfo.bgimg);
            document.querySelector('a-sky').setAttribute('src', poiInfo.bgimg);
        });
    },

    onVideoButtonClick: function (evt) {

        var video = document.querySelector("#video");

        var sphere = document.querySelector("#url");

        var material = sphere.getAttribute("material");

        // Update the sphere's material component
        var vidContainer = document.querySelector("#vidContainer");
        var isPlaying = vidContainer.isPlaying;

        console.log(isPlaying);
        if (isPlaying == false) {
            vidContainer.play();
            video.play();

            material.color = 'green';
        }
        else if (isPlaying == true) {
            vidContainer.pause();
            video.pause();

            material.color = 'red';
        }

        sphere.setAttribute("material", material);
        //console.log("video click", isPlaying);
    },

    //onExploreButtonClick: function (imgSrc) {
    //    console.log("Chang bg click", imgSrc);
    //    document.querySelector('a-sky').setAttribute('src', imgSrc);
    //}
    //var pois = document.querySelectorAll('.poiInteractable');

    ////set up events for POIs
    //for (var i = 0; i < pois.length; i++) {
    //    pois[i].addEventListener('click', function () {
    //        var pos = this.getAttribute('position');
    //        showInfoPanel(pos);
    //    })
    //}

    ////show info panel
    //function showInfoPanel(pos) {
    //    var panel = document.querySelector('#info-panel')
    //    panel.setAttribute('visible', true);
    //    //set POI specific info and position
    //    panel.object3D.position.set(pos.x, pos.y + 2, pos.z);
    //}


    //var poiElement = document.querySelector('#sphere');

    //poiElement.addEventListener('click', function () {
    //    showInfoPanel(poiElement.object3D.position);
    //});



    //document.body.appendChild(poiElement);

    //    var popup = document.querySelector('#panel');
    //    var isVisible = popup.getAttribute('visible');
    //    var pos = document.querySelector('#sphere').object3D.position;

    //    popup.object3D.position.set(pos.x, 5, pos.z);

    //    popup.setAttribute('visible', !isVisible);

    //    console.log("Clicked blue", document.querySelector('#sphere').object3D.position);

    //});
});