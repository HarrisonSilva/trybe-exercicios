const techList = (technologies, name) => {
    const listtechnologies = []
    if (technologies == 0) {
        return 'Vazio!'
    }
    for (let i = 0; i < technologies.length; i += 1) {
        const technology = {}
        technology[technologies[i]] = name
        listtechnologies.push(technology)
    }
    return listtechnologies
}
module.exports = techList
