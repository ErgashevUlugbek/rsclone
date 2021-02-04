import commonTags from './common/common';

export default async function view() {
    const bodyTag = document.querySelector('body');
    commonTags().forEach(tag => { bodyTag?.append(tag) });

    return bodyTag;
}