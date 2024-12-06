// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="Introduction/Introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><a href="CiscoNetAcademy/CiscoNetAcademy.html">Cisco Net Academy</a></li><li class="chapter-item expanded "><a href="IPV4/IPV4.html"><strong aria-hidden="true">1.</strong> IPv4</a></li><li class="chapter-item expanded "><a href="IPV4_Subnetting/IPV4_Subnetting.html"><strong aria-hidden="true">2.</strong> IPV4 Subnetting</a></li><li class="chapter-item expanded "><a href="Fundamentals_of_Networking/Fundamentals_of_Networking.html"><strong aria-hidden="true">3.</strong> Fundamentals of Networking</a></li><li class="chapter-item expanded "><a href="ApplicationLayer/ApplicationLayer.html"><strong aria-hidden="true">4.</strong> Application Layer</a></li><li class="chapter-item expanded "><a href="BasicRouterLab/BasicRouterLab.html"><strong aria-hidden="true">5.</strong> Basic Router Lab</a></li><li class="chapter-item expanded "><a href="VLANs_and_Trunking/VLANs_and_Trunking.html"><strong aria-hidden="true">6.</strong> VLANS and Trunking</a></li><li class="chapter-item expanded "><a href="DHCPv4/DHCPv4.html"><strong aria-hidden="true">7.</strong> DHCPv4</a></li><li class="chapter-item expanded "><a href="IPv6/IPv6.html"><strong aria-hidden="true">8.</strong> IPv6</a></li><li class="chapter-item expanded "><a href="ICMP/ICMP.html"><strong aria-hidden="true">9.</strong> ICMP</a></li><li class="chapter-item expanded "><a href="NetworkTroubleshooting/NetworkTroubleshooting.html"><strong aria-hidden="true">10.</strong> Network Troubleshooting</a></li><li class="chapter-item expanded "><a href="RIP/RIP.html"><strong aria-hidden="true">11.</strong> RIP</a></li><li class="chapter-item expanded "><a href="StaticRouting/StaticRouting.html"><strong aria-hidden="true">12.</strong> Static Routing</a></li><li class="chapter-item expanded "><a href="BGP/BGP.html"><strong aria-hidden="true">13.</strong> Border Gateway Protocol</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
