export default function commonTags() {
    const header: HTMLElement = document.createElement("header");
    const main: HTMLElement = document.createElement("main");
    const footer: HTMLElement = document.createElement("footer")
    header.innerHTML = `
        <div class="courses">courses</div>
        <div class="search">
            <div class="form-group d-flex">
                <input type="text" class="form-control rounded-end-0" id="search" placeholder="Search" value="hello">
                <label for="search">
                    <button class="btn btn-dark text-white rounded-start-0" id="search-button">Search</button>
                </label>
            </div>
        </div>
        <div class="notification"></div>
    `;

    main.innerHTML = `
        <main class="p-5">
            <h2 class="text-center">No result</h2>
        </main>
    `;

    footer.innerHTML = `
        <footer>
            <div class="d-flex">
                <div>Tab 1</div>
                <div>Tab 2</div>
                <div>Tab 3</div>
                <div>Tab 4</div>
            </div>
        </footer>
    `

    return [header, main, footer];
}