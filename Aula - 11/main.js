function validar() {
    var cpu = ipt_perg1.value.toUpperCase()
    var ula = ipt_perg2.value.toUpperCase()
    var registradores = ipt_perg3.value.toUpperCase()
    var ram = ipt_perg4.value.toUpperCase()
    var rom = ipt_perg5.value.toUpperCase()
    var eprom = ipt_perg6.value.toUpperCase()
    var flash = ipt_perg7.value.toUpperCase()
    var memassa = ipt_perg8.value.toUpperCase()
    var dma = ipt_perg9.value.toUpperCase()
    var cs = ipt_perg10.value.toUpperCase()
    var addbus = ipt_perg11.value.toUpperCase()
    var dtbus = ipt_perg12.value.toUpperCase()
    var i5 = ipt_perg13.value.toUpperCase()
    var i7 = ipt_perg14.value.toUpperCase()
    var dualc = ipt_perg15.value.toUpperCase()
    var quadc = ipt_perg16.value.toUpperCase()
    var threads = ipt_perg17.value.toUpperCase()
    var cache = ipt_perg18.value.toUpperCase()

    if (cpu == "CPU") {
        cpu_c.innerHTML = 'C'
        cpu_p.innerHTML = 'P'
        cpu_u.innerHTML = 'U'
        cpu_c.style.background = "lightgreen"
        cpu_p.style.background = "lightgreen"
        cpu_u.style.background = "lightgreen"
        ipt_perg1.style.border = "solid 2px lightgreen"
        ipt_perg1.readOnly = true
    } else {
        ipt_perg1.value = ''
        ipt_perg1.style.border = 'solid 2px red'
    }

    if (ula == "ULA") {
        ula_u.innerHTML = 'U'
        ula_l.innerHTML = 'L'
        ula_a.innerHTML = 'A'
        ula_u.style.background = "lightgreen"
        ula_l.style.background = "lightgreen"
        ula_a.style.background = "lightgreen"
        ipt_perg2.style.border = "solid 2px lightgreen"
        ipt_perg2.readOnly = true
    } else {
        ipt_perg2.value = ''
        ipt_perg2.style.border = 'solid 2px red'
    }

    if (registradores == "REGISTRADORES") {
        reg_r.innerHTML = 'R'
        reg_e.innerHTML = 'E'
        reg_g.innerHTML = 'G'
        reg_i.innerHTML = 'I'
        reg_s.innerHTML = 'S'
        reg_t.innerHTML = 'T'
        dualc_r.innerHTML = 'R'
        reg_a.innerHTML = 'A'
        reg_d.innerHTML = 'D'
        reg_o.innerHTML = 'O'
        reg_r2.innerHTML = 'R'
        reg_e2.innerHTML = 'E'
        flash_s.innerHTML = 'S'
        reg_r.style.background = "lightgreen"
        reg_e.style.background = "lightgreen"
        reg_g.style.background = "lightgreen"
        reg_i.style.background = "lightgreen"
        reg_s.style.background = "lightgreen"
        reg_t.style.background = "lightgreen"
        dualc_r.style.background = "lightgreen"
        reg_a.style.background = "lightgreen"
        reg_d.style.background = "lightgreen"
        reg_o.style.background = "lightgreen"
        reg_r2.style.background = "lightgreen"
        reg_e2.style.background = "lightgreen"
        flash_s.style.background = "lightgreen"
        ipt_perg3.style.border = "solid 2px lightgreen"
        ipt_perg3.readOnly = true
    } else {
        ipt_perg3.value = ''
        ipt_perg3.style.border = 'solid 2px red'
    }

    if (ram == "RAM") {
        ram_r.innerHTML = 'R'
        ram_a.innerHTML = 'A'
        ram_m.innerHTML = 'M'
        ram_r.style.background = "lightgreen"
        ram_a.style.background = "lightgreen"
        ram_m.style.background = "lightgreen"
        ipt_perg4.style.border = "solid 2px lightgreen"
        ipt_perg4.readOnly = true
    } else {
        ipt_perg4.value = ''
        ipt_perg4.style.border = 'solid 2px red'
    }

    if (rom == "ROM") {
        rom_r.innerHTML = 'R'
        rom_o.innerHTML = 'O'
        rom_m.innerHTML = 'M'
        rom_r.style.background = "lightgreen"
        rom_o.style.background = "lightgreen"
        rom_m.style.background = "lightgreen"
        ipt_perg5.style.border = "solid 2px lightgreen"
        ipt_perg5.readOnly = true
    } else {
        ipt_perg5.value = ''
        ipt_perg5.style.border = "solid 2px red"
    }

    if (eprom == "EPROM") {
        eprom_e.innerHTML = 'E'
        eprom_p.innerHTML = 'P'
        eprom_r.innerHTML = 'R'
        eprom_o.innerHTML = 'O'
        eprom_m.innerHTML = 'M'
        eprom_e.style.background = "lightgreen"
        eprom_p.style.background = "lightgreen"
        eprom_r.style.background = "lightgreen"
        eprom_o.style.background = "lightgreen"
        eprom_m.style.background = "lightgreen"
        ipt_perg6.style.border = "solid 2px lightgreen"
        ipt_perg6.readOnly = true
    } else {
        ipt_perg6.value = ''
        ipt_perg6.style.border = "solid 2px red"
    }

    if (flash == "FLASH") {
        flash_f.innerHTML = 'F'
        flash_l.innerHTML = 'L'
        flash_a.innerHTML = 'A'
        flash_s.innerHTML = 'S'
        flash_h.innerHTML = 'H'
        flash_f.style.background = "lightgreen"
        flash_l.style.background = "lightgreen"
        flash_a.style.background = "lightgreen"
        flash_s.style.background = "lightgreen"
        flash_h.style.background = "lightgreen"
        ipt_perg7.style.border = "solid 2px lightgreen"
        ipt_perg7.readOnly = true
    } else {
        ipt_perg7.value = ''
        ipt_perg7.style.border = "solid 2px red"
    }

    if (memassa == "MEMORIA DE MASSA" || memassa == "MEMÓRIA DE MASSA") {
        ram_m.innerHTML = 'M'
        eprom_e.innerHTML = 'E'
        memassa_m.innerHTML = 'M'
        memassa_o.innerHTML = 'Ó'
        rom_r.innerHTML = 'R'
        memassa_i.innerHTML = 'I'
        memassa_a.innerHTML = 'A'
        memassa_d.innerHTML = 'D'
        memassa_e.innerHTML = 'E'
        memassa_m2.innerHTML = 'M'
        memassa_a2.innerHTML = 'A'
        memassa_s.innerHTML = 'S'
        memassa_s2.innerHTML = 'S'
        memassa_a3.innerHTML = 'A'
        ram_m.style.background = "lightgreen"
        eprom_e.style.background = "lightgreen"
        memassa_m.style.background = "lightgreen"
        memassa_o.style.background = "lightgreen"
        rom_r.style.background = "lightgreen"
        memassa_i.style.background = "lightgreen"
        memassa_a.style.background = "lightgreen"
        memassa_d.style.background = "lightgreen"
        memassa_e.style.background = "lightgreen"
        memassa_m2.style.background = "lightgreen"
        memassa_a2.style.background = "lightgreen"
        memassa_s.style.background = "lightgreen"
        memassa_s2.style.background = "lightgreen"
        memassa_a3.style.background = "lightgreen"
        ipt_perg8.style.border = "solid 2px lightgreen"
        ipt_perg8.readOnly = true
    } else {
        ipt_perg8.value = ''
        ipt_perg8.style.border = "solid 2px red"
    }

    if (dma == "DMA") {
        dma_d.innerHTML = 'D'
        memassa_m2.innerHTML = 'M'
        dma_a.innerHTML = 'A'
        dma_d.style.background = "lightgreen"
        memassa_m2.style.background = "lightgreen"
        dma_a.style.background = "lightgreen"
        ipt_perg9.style.border = "solid 2px lightgreen"
        ipt_perg9.readOnly = true
    } else {
        ipt_perg9.value = ''
        ipt_perg9.style.border = "solid 2px red"
    }

    if (cs == "CS") {
        cs_c.innerHTML = 'C'
        cs_s.innerHTML = 'S'
        cs_c.style.background = "lightgreen"
        cs_s.style.background = "lightgreen"
        ipt_perg10.style.border = "solid 2px lightgreen"
        ipt_perg10.readOnly = true
    } else {
        ipt_perg10.value = ''
        ipt_perg10.style.border = "solid 2px red"
    }

    if (cache == "CACHE") {

        cpu_c.innerHTML = 'C'
        cache_a.innerHTML = 'A'
        cs_c.innerHTML = 'C'
        cache_h.innerHTML = 'H'
        memassa_e.innerHTML = 'E'

        cpu_c.style.background = "lightgreen"
        cache_a.style.background = "lightgreen"
        cs_c.style.background = "lightgreen"
        cache_h.style.background = "lightgreen"
        memassa_e.style.background = "lightgreen"
        ipt_perg18.readOnly = true
        ipt_perg18.style.border = "solid 2px lightgreen"

    } else {

        ipt_perg18.value = ''
        ipt_perg18.style.border = 'solid 2px red'

    }

    if (threads == "THREADS") {

        threads_t.innerHTML = 'T'
        threads_h.innerHTML = 'H'
        threads_r.innerHTML = 'R'
        threads_e.innerHTML = 'E'
        memassa_a.innerHTML = 'A'
        threads_d.innerHTML = 'D'
        threads_s.innerHTML = 'S'

        threads_t.style.background = "lightgreen"
        threads_h.style.background = "lightgreen"
        threads_r.style.background = "lightgreen"
        threads_e.style.background = "lightgreen"
        memassa_a.style.background = "lightgreen"
        threads_d.style.background = "lightgreen"
        threads_s.style.background = "lightgreen"
        ipt_perg17.style.border = "solid 2px lightgreen"
        ipt_perg17.readOnly = true

    } else {

        ipt_perg17.value = ''
        ipt_perg17.style.border = 'solid 2px red'

    }

    if (quadc == "QUAD CORE") {

        quadc_q.innerHTML = 'Q'
        quadc_u.innerHTML = 'U'
        quadc_a.innerHTML = 'A'
        quadc_d.innerHTML = 'D'
        dualc_c.innerHTML = 'C'
        quadc_o.innerHTML = 'O'
        quadc_r.innerHTML = 'R'
        quadc_e.innerHTML = 'E'

        quadc_q.style.background = "lightgreen"
        quadc_u.style.background = "lightgreen"
        quadc_a.style.background = "lightgreen"
        quadc_d.style.background = "lightgreen"
        dualc_c.style.background = "lightgreen"
        quadc_o.style.background = "lightgreen"
        quadc_r.style.background = "lightgreen"
        quadc_e.style.background = "lightgreen"
        ipt_perg16.style.border = "solid 2px lightgreen"
        ipt_perg16.readOnly = true

    } else {

        ipt_perg16.value = ''
        ipt_perg16.style.border = 'solid 2px red'

    }

    if (dualc == "DUAL CORE") {

        memassa_d.innerHTML = 'D'
        dualc_u.innerHTML = 'U'
        dualc_a.innerHTML = 'A'
        ula_l.innerHTML = 'L'
        dualc_c.innerHTML = 'C'
        dualc_o.innerHTML = 'O'
        dualc_r.innerHTML = 'R'
        dualc_e.innerHTML = 'E'

        memassa_d.style.background = "lightgreen"
        dualc_u.style.background = "lightgreen"
        dualc_a.style.background = "lightgreen"
        ula_l.style.background = "lightgreen"
        dualc_c.style.background = "lightgreen"
        dualc_o.style.background = "lightgreen"
        dualc_r.style.background = "lightgreen"
        dualc_e.style.background = "lightgreen"
        ipt_perg15.style.border = "solid 2px lightgreen"
        ipt_perg15.readOnly = true

    } else {
        ipt_perg15.value = ''
        ipt_perg15.style.border = 'solid 2px red'

    }


    if (i7 == "I7") {

        reg_i.innerHTML = 'I'
        i7_7.innerHTML = '7'


        reg_i.style.background = "lightgreen"
        i7_7.style.background = "lightgreen"
        ipt_perg14.style.border = "solid 2px lightgreen"
        ipt_perg14.readOnly = true

    } else {

        ipt_perg14.value = ''
        ipt_perg14.style.border = 'solid 2px red'

    }

    if (i5 == "I5") {

        memassa_i.innerHTML = 'I'
        i5_5.innerHTML = '5'


        memassa_i.style.background = "lightgreen"
        i5_5.style.background = "lightgreen"
        ipt_perg13.style.border = "solid 2px lightgreen"
        ipt_perg13.readOnly = true


    } else {

        ipt_perg13.value = ''
        ipt_perg13.style.border = 'solid 2px red'

    }

    if (dtbus == "DATA BUS") {

        dtbus_d.innerHTML = 'D';
        dtbus_a.innerHTML = 'A';
        dtbus_t.innerHTML = 'T';
        memassa_a3.innerHTML = 'A';
        dtbus_b.innerHTML = 'B';
        dtbus_u.innerHTML = 'U';
        dtbus_s.innerHTML = 'S';

        dtbus_d.style.background = "lightgreen";
        dtbus_a.style.background = "lightgreen";
        dtbus_t.style.background = "lightgreen";
        memassa_a3.style.background = "lightgreen";
        dtbus_b.style.background = "lightgreen";
        dtbus_u.style.background = "lightgreen";
        dtbus_s.style.background = "lightgreen";
        ipt_perg12.style.border = "solid 2px lightgreen"
        ipt_perg12.readOnly = true

    } else {

        ipt_perg12.value = '';
        ipt_perg12.style.border = 'solid 2px red';

    }


    if (addbus == "ADDRESS BUS") {

        addbus_a.innerHTML = 'A'
        addbus_d.innerHTML = 'D'
        addbus_d2.innerHTML = 'D'
        addbus_r.innerHTML = 'R'
        addbus_e.innerHTML = 'E'
        memassa_s.innerHTML = 'S'
        addbus_s.innerHTML = 'S'
        addbus_b.innerHTML = 'B'
        addbus_u.innerHTML = 'U'
        addbus_s2.innerHTML = 'S'

        addbus_a.style.background = "lightgreen"
        addbus_d.style.background = "lightgreen"
        addbus_d2.style.background = "lightgreen"
        addbus_r.style.background = "lightgreen"
        addbus_e.style.background = "lightgreen"
        memassa_s.style.background = "lightgreen"
        addbus_s.style.background = "lightgreen"
        addbus_b.style.background = "lightgreen"
        addbus_u.style.background = "lightgreen"
        addbus_s2.style.background = "lightgreen"
        ipt_perg11.style.border = "solid 2px lightgreen"
        ipt_perg11.readOnly = true

    } else {

        ipt_perg11.value = '';
        ipt_perg11.style.border = 'solid 2px red';

    }
}

function validar2() {
    var input = ipt_perg1.value.toUpperCase()
    ipt_perg1.style.border = 'solid 2px black'
    for (let i = 0; i < input.length; i++) {
        if (i == 0) {
            cpu_c.innerHTML = input[i]
        } else if (i == 1) {
            cpu_p.innerHTML = input[i]
        } else if (i == 2) {
            cpu_u.innerHTML = input[i]
        }
    }
}