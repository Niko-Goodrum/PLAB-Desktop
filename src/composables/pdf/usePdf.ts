import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const usePdf = () => {
    const exportPdf = async (elementId: string) => {
        const element = document.getElementById(elementId)
        if (!element) {
            console.error('PDF로 저장할 요소를 찾을 수 없습니다.')
            return
        }

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
        })

        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')

        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()

        const imgWidth = pdfWidth
        const imgHeight = (canvas.height * imgWidth) / canvas.width

        let heightLeft = imgHeight
        let position = 0

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST')
        heightLeft -= pdfHeight

        while (heightLeft > 0) {
            position = position - imgHeight + pdfHeight
            pdf.addPage()
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST')
            heightLeft -= pdfHeight
        }

        pdf.save('profile.pdf')
    }

    return { exportPdf }
}