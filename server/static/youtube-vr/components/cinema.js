AFRAME.registerComponent('cinema', {
    init: function () {
        this.loadVideo = this.loadVideo.bind(this);
        this.video = this.getParameterByName('v');
        this.loading = true;
        this.loadVideo();
    },
    getParameterByName: function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    loadVideo: function () {
        let that = this;
        $.ajax({
            url:'http://localhost:8080/api/video/video?url=' + this.video,
            type: 'GET',
            dataType : 'video/mp4',
            complete : function(code_html, statut){
                that.el.querySelector('.loadingEl').setAttribute('visible', 'false');
                that.screen = document.createElement('a-video');
                that.screen.setAttribute('src', 'http://localhost:8080/api/video/video?url=' + that.video);
                that.screen.setAttribute('width', '16');
                that.screen.setAttribute('height', '9');
                that.el.appendChild(that.screen);
            }
        });
    }
});