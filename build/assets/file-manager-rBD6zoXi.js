(function(){var e=document.getElementById("files-main-nav");new SimpleBar(e,{autoHide:!0});var i=document.getElementById("file-folders-container");new SimpleBar(i,{autoHide:!0}),FilePond.registerPlugin(FilePondPluginImagePreview,FilePondPluginImageExifOrientation,FilePondPluginFileValidateSize,FilePondPluginFileEncode,FilePondPluginImageEdit,FilePondPluginFileValidateType,FilePondPluginImageCrop,FilePondPluginImageResize,FilePondPluginImageTransform);const n=document.querySelector(".multiple-filepond");FilePond.create(n),document.querySelectorAll(".files-type").forEach(l=>{l.onclick=()=>{window.screen.width<=575&&(document.querySelector(".file-manager-folders").classList.add("open"),document.querySelector(".file-manager-navigation").classList.add("close"))}}),document.querySelector("#folders-close-btn").onclick=()=>{document.querySelector(".file-manager-navigation").classList.remove("close"),document.querySelector(".file-manager-folders").classList.remove("open")},window.addEventListener("resize",()=>{window.screen.width>576&&document.querySelector(".file-manager-navigation").classList.remove("close")})})();
