export default function ProjectSummary({ language, languages, year, yearEnd, group, groupType }) {
    const languageText = language ? `Language: ${language}` : `Languages: ${languages.join(", ")}`
    const yearText = yearEnd ? `Years: ${year}-${yearEnd}` : `Year: ${year}`
    const groupTitle = groupType ? groupType : "Institution"
    return <div className="project-summary">
        <div className="project-summary-language">{languageText}</div>
        <div className="project-summary-period">{yearText}</div>
        <div className="project-summary-group">{groupTitle}: {group}</div>
    </div>
}