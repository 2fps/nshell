function trim (str) {
    var reExtraSpace = /^\s*(.*?)\s+$/;

    return str.replace(reExtraSpace, "$1");
}

export default trim;