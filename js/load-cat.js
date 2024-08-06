window.onload = () => {
    const footerCat = `
         ,_     _
         |\\_,-~/
         / _  _ |    ,--.
        (  @  @ )   / ,-'
         \\  _T_/-._( (
         /         \`. \\
        |         _  \\ |
         \\ \\ ,  /      |
          || |-_\\__   /
         ((_/\`(____,-'
    `;

    loadFooterCat(footerCat);
}

function loadFooterCat(footerCat) {
    document.getElementById("footer-cat-carrier").innerHTML = footerCat;
}
