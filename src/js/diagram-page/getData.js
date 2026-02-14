/**
 * Hämtar data från en URL och tar fram de mest sökta kurserna och programmen på MIUN.
 *
 * @param {string} url - URL som datan ska hämtas från.
 * @returns {Promise<{top6Courses: Array, top5Programs: Array}>}
 * Ett objekt med:
 *  - top6Courses: De 6 kurser som har flest sökande HT25.
 *  - top5Programs: De 5 program som har flest sökande HT25.
 *
 * @throws {Error} Om hämtningen av data misslyckas.
 */
export async function getData(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Det gick inte att hämta data: ${res.status}`)

        const data = await res.json();

        //bara de sex mest sökta kurserna
        const top6Courses = data.filter(el => el.type === "Kurs").sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 6);

        //bara de fem mest sökta programmen
        const top5Programs = data.filter(el => el.type === "Program").sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 5);

        return {
            top6Courses,
            top5Programs
        }

    } catch (err) {
        console.error("Hämntning misslyckades:", err.message)
    }
}