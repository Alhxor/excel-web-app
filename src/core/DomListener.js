export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) throw new Error('No $root provided for DomListener')
        console.log(`New DomListener, $root: ${$root}, listeners: ${listeners}`)
    }
}
