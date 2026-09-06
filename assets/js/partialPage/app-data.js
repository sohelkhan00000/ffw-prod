globalData.appData = {
    "site-header": `<span class="site-header">${server.siteName}</span>`,
    "su-form": `     <style>
    .su-wrapper {
        display:none;
        position: fixed;
        width: 40px;
        height: auto;
        background-color: #6e4334;
        right: -5px;
        top: 60%;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        box-shadow: -3px 3px 2px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);
    }

    .su-wrapper:hover {
        right: 0;
    }


    .su-wrapper p {
        writing-mode: vertical-rl;
        padding: 12px 10px 12px 8px;
        margin: 0;
        text-align: center;
        color: aliceblue;
        transform: rotate(180deg);
        font-size: 12px;
        text-decoration: none;
        cursor: pointer;
    }

    .su-popover {
        position: fixed;
        right: 40px;
        top: 10%;
        width: 300px;
        height: auto;
        background-color: #f0f8ff;
        z-index: 200;
        padding: 30px 20px 20px 20px;
        text-align: center;
        display: none;
    }
    .su-popover img{
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
        border-radius: 10px;
    }

    .su-popover button {
        float: right;
        margin-top: -26px;
        margin-right: -18px;
    }

    @media (min-width: 768px) {
        .su-wrapper {
            display:block;
        }
    }
</style>   <div id="su-popover" class="su-popover shadow-lg">
    <button type="button" id="su-close" class="btn-close"></button>
    <img src="${server.imagePath}/qr-code-paytm.jpg">
</div>
<div id="su-wrapper" class="su-wrapper d-none">
    <div class="su-container">
        <p id="su-open" href="">SUPPORT US</p>
    </div>
</div>`,

"ss":`     <div class="col-md-4">          <ul>
<li>
    <label for="sb-search" class="form-label">OUR SERVICES</label>
</li>
<li>
    <a title="Rent Receipt" class="sidebar-links" href="/tools/rent-receipt/index.html">Rent Receipt</a>
</li>
<li>
    <a title="Fuel Bills" class="sidebar-links" href="/fuel-bills/index.html">Fuel Bills</a>
</li>
<li>
    <a title="Driver Salary Slip" class="sidebar-links" href="/tools/driver-salary/index.html">Driver
        Salary Slip</a>
</li>
<li>
    <a title="LTA Receipt" class="sidebar-links" href="/tools/lta-receipt/index.html">LTA Receipt</a>
</li>
<li>
    <a title="URL Shortener" class="sidebar-links" href="https://trimlink.ai?utm_source=freeforonline&amp;utm_medium=ffw&amp;utm_campaign=ffw_share" target="_blank" rel="noopener noreferrer">URL Shortener</a>
</li>
<li>
    <a title="Helper Bill" class="sidebar-links" href="/tools/helper-bill">Helper Bill</a>
</li>
</ul></div>`
}
