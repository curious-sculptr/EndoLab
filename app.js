/* ==========================================================================
   EndoLog Beta - Clinical Endoscope Inspection & Repair Tracking Matrix
   Integrated Multi-View Management Node with Google Sheets Cloud Synchronization
   ========================================================================== */


/* ==========================================================================
   1. GLOBAL TRANSLATION DICTIONARY MATRIX (EN / ID)
   ========================================================================== */
const EndoTranslationMatrix = {
    en: {
        nav_open_menu: "Open navigation menu",
        nav_close_menu: "Close navigation menu",
        nav_collapse: "Collapse navigation",
        nav_expand: "Expand navigation",
        brand_return_login: "Return to sign in",
        auth_theme_dark: "Use dark theme",
        auth_theme_light: "Use light theme",
        app_footer_label: "EndoLab application information",
        ui_language_label: "Interface language",
        active_repairs_label: "Active repairs",
        parts_transit_list_label: "Estimated orders in transit",
        scope_dashboard_label: "Repair Status Tracking",
        scope_lifecycle_summary_label: "Scope lifecycle summary",
        scope_lifecycle_filter_label: "Filter scopes by lifecycle",
        metric_show_active: "Show active repairs",
        metric_show_ready: "Show scopes ready for pickup",
        metric_show_warranty: "Show scopes in warranty period",
        metric_show_completed: "Show completed scopes out of lab",
        metric_show_backup: "Show backup scopes",
        report_preview_close_label: "Close report preview",
        report_logo_contact_label: "Endo Andalan contact information",
        report_incoming_inspection_label: "Incoming inspection",
        report_details_label: "Service report details",
        report_signatures_label: "Handwritten signatures",
        mirror_stage_for: "Repair stage for {serial}",
        mirror_scope_history_label: "Scope {model}, serial {serial}. Press Enter to open its service history.",
        scope_generic: "scope",
        scope_unknown: "unknown",
        inventory_edit_part_name: "part name",
        inventory_edit_category: "category",
        inventory_edit_lot_number: "lot number",
        inventory_edit_quantity: "on-hand quantity",
        inventory_edit_vendor: "vendor",
        inventory_edit_incoming_date: "incoming date",
        inventory_edit_outgoing_date: "outgoing date",
        // Form hints and accessibility labels
        quick_note_placeholder: "Add a brief repair update",
        quick_part_placeholder: "Part or component",
        scope_model_placeholder: "e.g., EC-760ZP",
        client_facility_placeholder: "Hospital wing...",
        technician_placeholder: "Operator name...",
        complaint_placeholder: "Symptoms reported...",
        anatomy_placeholder_01: "Condition, fluid integrity notes...",
        anatomy_placeholder_02: "Lens pitting or structural damage specs...",
        anatomy_placeholder_03: "Fluid blockage, alignment parameters...",
        anatomy_placeholder_04: "Optical window clarity, deep surface scratch verification...",
        anatomy_placeholder_05: "Illumination throughput profiles, sealing window boundaries...",
        anatomy_placeholder_06: "Bezel burrs, tearing, deployment pathway obstructions...",
        anatomy_placeholder_07: "Scratches, buckling, structural scaling changes...",
        anatomy_placeholder_08: "Tension accuracy, exterior chemical layer traits...",
        anatomy_placeholder_09: "Separation from main housing, material degradation...",
        anatomy_placeholder_10: "Cap thread parameters, micro-deformation wear...",
        anatomy_placeholder_11: "Ergonomic chassis cracking, grip fluid border checks...",
        anatomy_placeholder_12: "Gear slip, tracking resistance, pull-back play...",
        anatomy_placeholder_13: "Travel range limits, cable alignment properties...",
        anatomy_placeholder_14: "Free rotation mechanics, wire fraying profiling...",
        anatomy_placeholder_15: "Free tracking play adjustments, torque consistency...",
        anatomy_placeholder_16: "Friction lock efficacy, slippage under manual strain...",
        anatomy_placeholder_17: "Friction lock mechanism hold performance...",
        anatomy_placeholder_18: "Piston cylinder scoring, fluid delivery response...",
        anatomy_placeholder_19: "Suction return response speed, scoring, pooling...",
        anatomy_placeholder_20: "Tactile button membrane return, internal contact resistance...",
        anatomy_placeholder_21: "Universal light guide cable connection strain checks...",
        anatomy_placeholder_22: "Cable external skin buckling or fiber twisting artifacts...",
        anatomy_placeholder_23: "Electrical umbilical connector block junction checks...",
        anatomy_placeholder_24: "Metal block casing tracking, structural crack checking...",
        anatomy_placeholder_25: "Bent golden connector pins, pin corrosion scaling...",
        anatomy_placeholder_26: "Fiber end lens burn tracing, fusion scaling check...",
        anatomy_placeholder_27: "Forward connector blockage, reverse flow seal tests...",
        anatomy_placeholder_28: "Angulation tracking system baseline friction calibration...",
        anatomy_placeholder_29: "Sensor noise baseline metrics, narrow band lens shifts...",
        anatomy_placeholder_30: "Mechanical control wire lever tracking lift limits...",
        anatomy_placeholder_31: "Micro-leak fluid ingress test, cellular residue profiles...",
        anatomy_placeholder_32: "Force articulation hinge wear, geometric bend profiles...",
        anatomy_placeholder_33: "Eyepiece lens scratch checks, fiber pixel transmission alignment...",
        repair_notes_placeholder: "Calibration parameter corrections, actions taken...",
        embedded_part_placeholder: "e.g., Replacement O-Ring Kit, BR-04 Sleeve",
        table_search_placeholder: "Search by unique Serial Number...",
        part_scope_search_placeholder: "Search by repair ID, serial, or model…",
        part_name_placeholder: "e.g., Insertion tube mesh sleeve",
        part_vendor_placeholder: "Vendor name",
        part_notes_placeholder: "Fit, compatibility, urgency, or other request details…",
        mirror_search_placeholder: "Search serial number, brand, or model…",
        history_search_placeholder: "Search reports, notes, technician, facility, parts...",
        terminal_todo_placeholder: "Add custom action step...",
        terminal_scratchpad_placeholder: "Drop hot temporary fragments, supplier details, or courier numbers here... Saves automatically on keystroke.",
        admin_note_title_placeholder: "e.g., Client Cost Adjustment, Damage Dispute",
        admin_note_content_placeholder: "Write proprietary processing evaluations safely...",
        edit_part_name_placeholder: "Component or part required",
        part_search_results_label: "Active repairs",
        timeline_history_label: "Search this scope's history",
        scope_edit_close_label: "Close editor",
        // Navigation
        sidebar_nav_mirror: "Tracking Dashboard",
        sidebar_nav_dashboard: "Scope Entry & Records",
        sidebar_nav_parts: "Parts & Logistics",
        sidebar_nav_timeline: "Scope History Timeline",
        sidebar_nav_inventory: "Inventory",
        sidebar_nav_admin_logs: "Log",
        sidebar_nav_theme: "Shift UI Theme",


        // View Headings
        view_title_dashboard: "Endoscope Inspection & Repair Log",
        view_sub_dashboard: "Enterprise Clinical Equipment Node",
        view_title_mirror: "Repair Status Tracking",
        view_title_parts: "Parts Procurement & Supply Tracking",
        view_sub_parts: "Logistics Management Dashboard View",
        view_title_timeline: "Scope Lifecycle Timeline Explorer",
        view_sub_timeline: "Query comprehensive history by serial index",
        view_title_inventory: "Inventory",
        view_sub_inventory: "Monitor on-hand stock quantities, lot numbers, and track usage allocations.",
        view_title_admin: "Private Engineering Notebook Hub",
        view_sub_admin: "Restricted cryptographic space for internal repair monitoring analytics.",


        // Metrics Deck
        metric_total_label: "Total Logs Managed",
        metric_total_badge: "All",
        metric_overdue_label: "Urgent Overdue Items",
        metric_overdue_badge: "Overdue",
        metric_active_label: "Open Active Files",
        metric_active_badge: "Pending",


        // Quick Lab Linker
        quick_title: "Quick Lab Update & Part Request Linker",
        quick_lbl_serial: "Target Serial Reference",
        quick_lbl_note: "Repair Status / Technical Note Description",
        quick_lbl_part: "Link Urgent Spare Component Request (Optional)",
        quick_btn_submit: "Push Progress Update",


        // Master Service Report Form
        form_title_report: "New Service Report",
        form_sub_report: "Document diagnostic inspections and calibration benchmarks.",
        legend_metadata: "Equipment Metadata",
        lbl_model: "Scope Model",
        lbl_class: "Scope Classification",
        lbl_serial: "Serial Number (S/N)",
        lbl_client: "Client / Facility Source",
        lbl_state: "Current Status",
        lbl_warranty: "Warranty Tracking Flag",
        lbl_tier: "Repair Tier Classification",
        lbl_tech: "Technician",
        lbl_date: "Incoming Date",
        lbl_dp: "Down Payment Confirmed Date",
        lbl_ver_status: "Log Verification Status",
        legend_narratives: "System Narratives",
        lbl_complaint: "Client Complaint Details",
        legend_anatomy: "Evaluation Report",
        legend_anatomy_hint: "Scroll container to review component configurations.",
        legend_logistics: "Logistics & File Attachments",
        lbl_embed_part: "Spare Part Request",
        lbl_cloud_url: "Google Drive Link",
        lbl_action_notes: "Repair Notes",
        btn_clear: "Clear Fields",
        btn_submit_log: "Commit Service Log",


        // Master Logs Table
        table_title_logs: "Log of Scopes Recorded",
        table_sub_logs: "Real-time repository sync with local file filters.",
        btn_export_csv: "Export CSV",
        btn_print_summary: "Print Summary",
        th_target_date: "Incoming Date",
        th_device_profile: "Device Profile",
        th_serial_number: "Serial Number",
        th_op_state: "Operational State",
        th_warranty: "Warranty",
        th_time_remaining: "Time Remaining",
        th_diagnostics: "Diagnostics / Links",
        th_actions: "Actions",


        // Parts Procurement
        form_title_procurement: "Procurement Parts Demand Request Form",
        form_sub_procurement: "Queue spare parts attached to a target scope history, general supplies, or base storage inventory stock.",
        lbl_alloc_cat: "Demand Allocation Category",
        lbl_assoc_node: "Associated Scope Serial Node",
        lbl_comp_asset: "Component Asset Name",
        lbl_cost: "Financial Cost ($)",
        lbl_vendor: "Supplier Vendor",
        lbl_eta: "Logistical ETA",
        btn_dispatch_part: "Dispatch Procurement Request",
        table_title_parts: "Procurement Logistics Pipeline Register",
        table_sub_parts: "Track incoming parts requests, operational approval limits, and order values.",
        th_parts_alloc: "Allocation Context",
        th_parts_comp: "Component Requested",
        th_parts_supplier: "Supplier Vendor",
        th_parts_cost: "Financial Cost",
        th_parts_eta: "Logistical ETA",
        th_parts_state: "Procurement State",
        th_parts_actions: "Administrative Actions",
        btn_approve: "Approve Request",


        // Scope History Timeline
        timeline_title: "Scope Lifecycle Timeline Explorer",
        timeline_sub: "Query comprehensive chronological service logs and media parameters by device identifier.",
        timeline_serial_placeholder: "Enter equipment serial number (S/N)...",
        timeline_serial_label: "Equipment serial number",
        btn_query: "Query",
        timeline_empty_hint: "Enter a valid endoscope Serial Number above to resolve its historical clinical service lifecycle.",
        timeline_no_records: "No chronological service records found for Serial Number: ",
        timeline_back_dashboard: "← Back to Tracking Dashboard",

        report_preview_title: "Editable Service Report Preview",
        report_preview_hint: "Review and edit the first-page report before printing.",
        report_heading: "Service Report",
        report_subheading: "Incoming Technical Report",
        report_scope_type: "Scope Type",
        report_brand_product: "Brand / Product",
        report_type: "Type",
        report_serial: "Serial No.",
        report_client: "Client",
        report_sales_person: "Sales Person",
        report_date: "Date",
        report_location: "Location",
        report_initial_complaint: "Initial Complaint",
        report_leak_test: "Leak Test",
        report_sterilization: "Sterilization",
        report_sterilization_date: "Sterilization Date",
        report_chemical: "Chemical",
        report_additional: "Additional Report",
        report_components: "Component Inspection",
        report_component: "Component",
        report_test: "Test / Result",
        report_notes: "Notes",
        report_status_pass: "Pass",
        report_status_fail: "Fail",
        report_status_pending: "Select result",
        report_service_contract: "Service Contract",
        report_contract_number: "Contract Number",
        report_customer_visit: "Customer Visit",
        report_accessories: "Accessories",
        report_linked_parts: "Linked Parts",
        report_requester: "Requester",
        report_department: "Department",
        report_repair_category: "Repair Category",
        report_ect: "ECT",
        report_signature_technician: "Technician",
        report_signature_customer: "Customer",
        report_signature_approval: "Approved By",
        report_save_sheet: "Save Changes to Sheet",
        report_cancel: "Cancel",
        report_print: "Print Report",
        mirror_print_report: "Print Report",
        mirror_search_label: "Search scopes",
        mirror_card_repair_stage: "Repair stage",
        mirror_card_progress: "Time elapsed",
        mirror_card_priority: "Priority · Complete ASAP",
        mirror_card_progress_aria: "Repair timeline progress",
        mirror_card_details: "Scope details",
        mirror_card_owner: "Owner",
        mirror_card_start_date: "Start date",
        mirror_card_estimated_end_date: "Estimated end date",
        mirror_card_time_remaining: "Time remaining",
        mirror_card_reference: "Reference",
        mirror_card_latest_note: "Latest note",
        mirror_card_add_note: "Add scope note",
        mirror_card_close_note: "Close note",
        mirror_card_note_placeholder: "Add a repair update or scope observation…",
        mirror_card_save_note: "Save note",
        mirror_card_cancel: "Cancel",
        mirror_card_print_report: "Print report",
        scope_request_title: "Request a Part",
        scope_request_hint: "Create a procurement ticket linked to this scope and service report.",
        scope_request_submit: "Request this part",
        scope_edit_title: "Edit Scope Service Report",
        scope_edit_subtitle: "Update report fields, parts, and scope details.",
        scope_request_deletion: "Request Content Deletion",
        scope_request_deletion_hint: "This submits a review request; technicians cannot delete scope data.",
        scope_deletion_reason: "Reason for request",
        scope_deletion_placeholder: "Explain why this record should be reviewed for deletion.",
        scope_action_edit: "Edit",
        scope_action_delete: "Delete Record",
        scope_action_request_deletion: "Request Content Deletion",
        scope_action_cancel: "Cancel",
        scope_action_save: "Save Scope Updates",
        scope_part_name: "Part name",
        scope_part_quantity: "Quantity",
        scope_part_estimated_price: "Estimated price (optional)",
        scope_part_vendor_link: "Vendor source link (optional)",
        scope_part_preferred_vendor: "Preferred vendor (optional)",
        scope_part_notes: "Notes / instructions (optional)",
        inv_delivery_speed: "Delivery speed (1–5)",
        vendor_quality_average: "Quality",
        vendor_speed_average: "Delivery speed",
        vendor_receipt_count: "received inventory observations",
        vendor_no_receipts: "No received-inventory observations yet.",
        vendor_no_quality_rating: "No quality rating",
        parts_transit_empty: "No ordered parts with origin, arrival destination, and ETA details are available.",
        parts_transit_summary: "Showing {count} estimated shipments simultaneously. Progress is calculated from order date to ETA.",
        inv_quality_rating: "Received part quality (1–5)",
        inv_quality_notes: "Receipt observations (optional)",
        inv_quality_select_rating: "Select a rating",
        inv_quality_select_rating: "Select a rating",
        "34": "Ocular Tower",


        // Warehouse Inventory
        inv_open_form: "Update Inventory",
        inv_close_form: "Close",
        inv_form_title: "Update Inventory",
        inv_form_sub: "Register a received part batch, assign its category, and record vendor quality.",
        inv_lbl_name: "Part Name / Description",
        inv_lbl_sku: "SKU Code",
        inv_lbl_lot: "Batch Lot Number (Lot #)",
        inv_lbl_stock: "Initial Current Stock",
        inv_lbl_vendor: "Supplier Vendor",
        inv_btn_submit: "Ingest Asset Batch Line",
        inv_table_title: "Available On-Hand Quantities",
        inv_table_sub: "Search categorized stock, edit item details, and review incoming and outgoing activity.",
        th_inv_part: "Part Profile (Name / SKU)",
        th_inv_lot: "Lot #",
        th_inv_stock: "On-Hand Stock",
        th_inv_vendor: "Vendor Channel",
        th_inv_analytics: "Utilization Analytics (By Repair Tier Category)",
        inv_lbl_category: "Part category",
        inv_lot_label: "Lot number",
        inv_current_stock_label: "Current stock",
        inv_adjust_quantity: "Adjust on-hand quantity",
        inv_quantity_adjustment_label: "Adjust on-hand quantity",
        inv_adjust_stock_hint: "To record parts used for this repair, use the Parts Consumed section above.",
        inv_vendor_label: "Vendor",
        inv_search_label: "Search inventory",
        inv_search_placeholder: "Search part name, SKU, lot, vendor, or category",
        inv_category_placeholder: "Select part category",
        inv_units: "units",
        inv_set_value: "Set value",
        inv_edit: "Edit",
        inv_not_recorded: "Not recorded",
        inv_incoming: "Incoming",
        inv_outgoing: "Outgoing",
        inv_last_repair_category: "Last repair category",
        inv_repair_category_if_decrease: "Repair category if stock decreases",
        inv_select_repair_category: "Choose category",
        inv_empty_search: "No inventory items match this search.",
        inv_empty_stock: "No warehouse stock profiles cataloged.",
        inv_low_stock: "LOW STOCK · REORDER",
        scope_consumed_title: "Parts Consumed",
        scope_consumed_subtitle: "Select available warehouse stock to link and consume parts for this repair. Stock is decremented when linked.",
        scope_consumed_available: "Available inventory item",
        scope_consumed_choose: "Choose a part and lot",
        scope_consumed_option: "{name} · {sku} · Lot {lot} · {available} available",
        scope_consumed_quantity: "Quantity",
        scope_consumed_available_summary: "On hand: {available} · Remaining after use: {remaining}",
        scope_consumed_select_item_hint: "Select a part and lot to check its current on-hand quantity.",
        scope_consumed_quantity_error: "Enter a whole quantity from 1 to {available}.",
        scope_consumed_category_error: "Select the repair category for this stock usage.",
        scope_consumed_button_hint: "This records an outgoing movement and links it to this scope.",
        scope_consumed_repair_category: "Repair category",
        scope_consumed_select_category: "Select repair category",
        scope_consumed_link: "Consume quantity and link to scope",
        scope_consumed_none_available: "No available inventory can be linked to this repair.",
        scope_consumed_none_linked: "No inventory parts are linked to this scope yet.",


        // Admin Terminal
        admin_gate_title: "Secure Terminal Handshake",
        admin_gate_btn: "INITIALIZE_SESSION()",
        admin_todo_title: "Daily Triage Checklist",
        admin_scratch_title: "Persistent Lab Scratchpad",
        admin_note_title: "Append Encrypted Engineering Note",
        admin_lbl_sn: "Target Scope S/N Link",
        admin_lbl_title: "Topic Classification",
        admin_lbl_comments: "Internal Engineering Comments",
        admin_btn_write: "WRITE_RECORD_TO_CLOUD()",
        admin_journal_title: "Secure Internal Journal Index",
        th_admin_time: "Timestamp",
        th_admin_sn: "Linked S/N",
        th_admin_topic: "Topic Heading",
        th_admin_comments: "Internal Comments",


        // System Toasts & Alerts
        toast_transmitting: "📡 CLOUD_SYNC: transmitting package lines...",
        toast_synced: "✓ CLOUD_SYNC: Google Sheets updated successfully!",
        alert_low_stock: "LOW BASE STOCK ALERT:",
        alert_predictive: "PREDICTIVE ANOMALY DETECTED:",
        msg_saved_synced: "Report saved locally and dispatched to Google Sheets!",
        msg_deleted_synced: "Record permanently removed and sync signal dispatched.",


        // 33 Anatomy Components (EN)
        "01": "Bending Rubber", "02": "Distal Head", "03": "Nozzle Air/Water", "04": "Camera Lens",
        "05": "Light Guide Lens", "06": "Biopsy Channel", "07": "Bending Section", "08": "Insertion Tube",
        "09": "Stress Rubber Boot #1", "10": "Biopsy Inlet Port", "11": "Control Body", "12": "Angulation Up",
        "13": "Angulation Down", "14": "Angulation Left", "15": "Angulation Right", "16": "Brake U/D",
        "17": "Brake L/R", "18": "Air Water Channel", "19": "Suction Channel", "20": "Switch Electrical (1, 2, 3, 4, 5)",
        "21": "Stress Rubber Boot #2", "22": "Light Guide Tube", "23": "Stress Rubber Boot #3", "24": "Electrical Housing",
        "25": "Electrical Pin Unit", "26": "Light Guide Prong", "27": "Auxiliary Water Inlet/Jet", "28": "Tensioner",
        "29": "Camera CCD / NBI / Eyescan", "30": "Elevator Lever", "31": "Channel Elevator", "32": "Actuator Arm",
        "33": "Fiber Image / Ocular Tower"
    },
    id: {
        nav_open_menu: "Buka menu navigasi",
        nav_close_menu: "Tutup menu navigasi",
        nav_collapse: "Ciutkan navigasi",
        nav_expand: "Perluas navigasi",
        brand_return_login: "Kembali ke halaman masuk",
        auth_theme_dark: "Gunakan tema gelap",
        auth_theme_light: "Gunakan tema terang",
        app_footer_label: "Informasi aplikasi EndoLab",
        ui_language_label: "Bahasa antarmuka",
        active_repairs_label: "Perbaikan aktif",
        parts_transit_list_label: "Perkiraan pesanan dalam perjalanan",
        scope_dashboard_label: "Pelacakan Status Perbaikan",
        scope_lifecycle_summary_label: "Ringkasan siklus hidup scope",
        scope_lifecycle_filter_label: "Filter scope berdasarkan siklus",
        metric_show_active: "Tampilkan perbaikan aktif",
        metric_show_ready: "Tampilkan scope yang siap diambil",
        metric_show_warranty: "Tampilkan scope dalam masa garansi",
        metric_show_completed: "Tampilkan scope selesai di luar lab",
        metric_show_backup: "Tampilkan scope cadangan",
        report_preview_close_label: "Tutup pratinjau laporan",
        report_logo_contact_label: "Informasi kontak Endo Andalan",
        report_incoming_inspection_label: "Pemeriksaan masuk",
        report_details_label: "Detail laporan servis",
        report_signatures_label: "Tanda tangan tulisan tangan",
        mirror_stage_for: "Tahap perbaikan untuk {serial}",
        mirror_scope_history_label: "Scope {model}, nomor seri {serial}. Tekan Enter untuk membuka riwayat servis.",
        scope_generic: "scope",
        scope_unknown: "tidak diketahui",
        inventory_edit_part_name: "nama suku cadang",
        inventory_edit_category: "kategori",
        inventory_edit_lot_number: "nomor lot",
        inventory_edit_quantity: "jumlah stok tersedia",
        inventory_edit_vendor: "vendor",
        inventory_edit_incoming_date: "tanggal barang masuk",
        inventory_edit_outgoing_date: "tanggal barang keluar",
        // Petunjuk formulir dan label aksesibilitas
        quick_note_placeholder: "Tambahkan pembaruan singkat perbaikan",
        quick_part_placeholder: "Suku cadang atau komponen",
        scope_model_placeholder: "misalnya, EC-760ZP",
        client_facility_placeholder: "Sayap rumah sakit...",
        technician_placeholder: "Nama operator...",
        complaint_placeholder: "Gejala yang dilaporkan...",
        anatomy_placeholder_01: "Catatan kondisi dan integritas cairan...",
        anatomy_placeholder_02: "Spesifikasi lubang lensa atau kerusakan struktural...",
        anatomy_placeholder_03: "Penyumbatan cairan dan parameter keselarasan...",
        anatomy_placeholder_04: "Kejernihan jendela optik dan pemeriksaan goresan permukaan...",
        anatomy_placeholder_05: "Profil keluaran cahaya dan batas penyegelan jendela...",
        anatomy_placeholder_06: "Gerigi bezel, robekan, atau hambatan jalur instrumen...",
        anatomy_placeholder_07: "Goresan, tekukan, atau perubahan skala struktur...",
        anatomy_placeholder_08: "Akurasi tegangan dan kondisi lapisan kimia luar...",
        anatomy_placeholder_09: "Pemisahan dari rumah utama dan degradasi material...",
        anatomy_placeholder_10: "Parameter ulir penutup dan keausan akibat deformasi mikro...",
        anatomy_placeholder_11: "Retakan rangka ergonomis dan pemeriksaan cairan pada pegangan...",
        anatomy_placeholder_12: "Selip roda gigi, hambatan gerak, dan kelonggaran tarikan balik...",
        anatomy_placeholder_13: "Batas jangkauan gerak dan karakteristik keselarasan kabel...",
        anatomy_placeholder_14: "Mekanisme rotasi bebas dan pemeriksaan serabut kawat...",
        anatomy_placeholder_15: "Penyesuaian kelonggaran gerak dan konsistensi torsi...",
        anatomy_placeholder_16: "Efektivitas kunci gesek dan selip saat diberi beban manual...",
        anatomy_placeholder_17: "Kemampuan mekanisme kunci gesek menahan posisi...",
        anatomy_placeholder_18: "Goresan silinder piston dan respons aliran cairan...",
        anatomy_placeholder_19: "Kecepatan respons aliran balik isap, goresan, dan genangan...",
        anatomy_placeholder_20: "Respons membran tombol dan resistansi kontak internal...",
        anatomy_placeholder_21: "Pemeriksaan tegangan pada sambungan kabel pemandu cahaya universal...",
        anatomy_placeholder_22: "Tekukan kulit luar kabel atau serat optik yang terpuntir...",
        anatomy_placeholder_23: "Pemeriksaan sambungan blok konektor kabel listrik...",
        anatomy_placeholder_24: "Pemeriksaan casing blok logam dan retakan struktural...",
        anatomy_placeholder_25: "Pin konektor bengkok dan korosi pada pin...",
        anatomy_placeholder_26: "Jejak terbakar pada lensa ujung serat dan pemeriksaan fusi...",
        anatomy_placeholder_27: "Penyumbatan konektor depan dan uji segel aliran balik...",
        anatomy_placeholder_28: "Kalibrasi gesekan dasar pada sistem pelacakan angulasi...",
        anatomy_placeholder_29: "Metrik dasar derau sensor dan pergeseran lensa pita sempit...",
        anatomy_placeholder_30: "Batas pengangkatan tuas kawat kendali mekanis...",
        anatomy_placeholder_31: "Uji kebocoran mikro, masuknya cairan, dan residu sel...",
        anatomy_placeholder_32: "Keausan engsel artikulasi dan profil tekukan geometris...",
        anatomy_placeholder_33: "Pemeriksaan goresan lensa okuler dan keselarasan transmisi piksel serat...",
        repair_notes_placeholder: "Koreksi parameter kalibrasi dan tindakan yang dilakukan...",
        embedded_part_placeholder: "misalnya, Kit O-Ring Pengganti, Sleeve BR-04",
        table_search_placeholder: "Cari berdasarkan Nomor Seri unik...",
        part_scope_search_placeholder: "Cari berdasarkan ID perbaikan, nomor seri, atau model…",
        part_name_placeholder: "misalnya, selubung jaring tabung insersi",
        part_vendor_placeholder: "Nama vendor",
        part_notes_placeholder: "Kesesuaian, kompatibilitas, urgensi, atau detail permintaan lainnya…",
        mirror_search_placeholder: "Cari nomor seri, merek, atau model…",
        history_search_placeholder: "Cari laporan, catatan, teknisi, fasilitas, suku cadang...",
        terminal_todo_placeholder: "Tambahkan langkah tindakan...",
        terminal_scratchpad_placeholder: "Tambahkan catatan sementara, detail pemasok, atau nomor kurir... Disimpan otomatis saat mengetik.",
        admin_note_title_placeholder: "misalnya, Penyesuaian Biaya Klien, Sengketa Kerusakan",
        admin_note_content_placeholder: "Tulis evaluasi pemrosesan internal dengan aman...",
        edit_part_name_placeholder: "Komponen atau suku cadang yang diperlukan",
        part_search_results_label: "Perbaikan aktif",
        timeline_history_label: "Cari riwayat scope ini",
        scope_edit_close_label: "Tutup editor",
        // Navigation
        sidebar_nav_mirror: "Dasbor Pelacakan",
        sidebar_nav_dashboard: "Input & Riwayat Scope",
        sidebar_nav_parts: "Suku Cadang & Logistik",
        sidebar_nav_timeline: "Timeline Riwayat Alat",
        sidebar_nav_inventory: "Inventaris",
        sidebar_nav_admin_logs: "Log",
        sidebar_nav_theme: "Ubah Tema UI",


        // View Headings
        view_title_dashboard: "Log Inspeksi & Perbaikan Endoskopi",
        view_sub_dashboard: "Node Manajemen Peralatan Klinis",
        view_title_mirror: "Pelacakan Status Perbaikan",
        view_title_parts: "Pengadaan Suku Cadang & Pelacakan Logistik",
        view_sub_parts: "Tampilan Dasbor Manajemen Logistik",
        view_title_timeline: "Penjelajah Timeline Siklus Hidup Ruang Lab",
        view_sub_timeline: "Kueri riwayat kronologis lengkap berdasarkan nomor seri alat",
        view_title_inventory: "Inventaris",
        view_sub_inventory: "Pantau stok fisik gudang, nomor lot, dan lacak alokasi penggunaan perbaikan.",
        view_title_admin: "Hub Catatan Rahasia Teknisi Senior",
        view_sub_admin: "Ruang terenkripsi terbatas untuk analisis dan catatan perbaikan internal.",


        // Metrics Deck
        metric_total_label: "Total Log Dikelola",
        metric_total_badge: "Semua",
        metric_overdue_label: "Item Melebihi Batas (Overdue)",
        metric_overdue_badge: "Terlambat",
        metric_active_label: "File Lab Aktif Terbuka",
        metric_active_badge: "Pending",


        // Quick Lab Linker
        quick_title: "Pembaruan Cepat Lab & Tautan Suku Cadang",
        quick_lbl_serial: "Referensi Nomor Seri Target",
        quick_lbl_note: "Status Perbaikan / Deskripsi Catatan Teknis",
        quick_lbl_part: "Tautkan Permintaan Suku Cadang Mendesak (Opsional)",
        quick_btn_submit: "Kirim Pembaruan Progres",


        // Master Service Report Form
        form_title_report: "Laporan Layanan Baru",
        form_sub_report: "Dokumentasikan inspeksi diagnostik dan tolok ukur kalibrasi.",
        legend_metadata: "Metadata Peralatan",
        lbl_model: "Model Alat (Scope)",
        lbl_class: "Klasifikasi Alat",
        lbl_serial: "Nomor Seri (S/N)",
        lbl_client: "Klien / Rumah Sakit Asal",
        lbl_state: "Status Saat Ini",
        lbl_warranty: "Status Garansi",
        lbl_tier: "Tingkat Kompleksitas Perbaikan",
        lbl_tech: "Teknisi",
        lbl_date: "Tanggal Masuk",
        lbl_dp: "Tanggal Konfirmasi Uang Muka (DP)",
        lbl_ver_status: "Status Verifikasi Log",
        legend_narratives: "Deskripsi Masalah / Narasi",
        lbl_complaint: "Detail Keluhan Klien / Gejala",
        legend_anatomy: "Laporan Evaluasi",
        legend_anatomy_hint: "Gulir kontainer untuk meninjau konfigurasi komponen.",
        legend_logistics: "Logistik & Lampiran File",
        lbl_embed_part: "Permintaan Suku Cadang",
        lbl_cloud_url: "Link Google Drive",
        lbl_action_notes: "Catatan Perbaikan",
        btn_clear: "Bersihkan Bidang",
        btn_submit_log: "Simpan Log Layanan",


        // Master Logs Table
        table_title_logs: "Daftar Scope yang Tercatat",
        table_sub_logs: "Sinkronisasi repositori waktu-nyata dengan filter berkas lokal.",
        btn_export_csv: "Ekspor CSV",
        btn_print_summary: "Cetak Ringkasan",
        th_target_date: "Tanggal Masuk",
        th_device_profile: "Profil Alat",
        th_serial_number: "Nomor Seri",
        th_op_state: "Status Operasi",
        th_warranty: "Garansi",
        th_time_remaining: "Sisa Waktu",
        th_diagnostics: "Diagnostik / Link",
        th_actions: "Tindakan",


        // Parts Procurement
        form_title_procurement: "Formulir Permintaan Pengadaan Suku Cadang",
        form_sub_procurement: "Antrikan suku cadang yang terikat ke riwayat perbaikan alat, persediaan umum, atau stok gudang fasilitas.",
        lbl_alloc_cat: "Kategori Alokasi Permintaan",
        lbl_assoc_node: "Hub Nomor Seri Alat Terkait",
        lbl_comp_asset: "Nama Aset Komponen Suku Cadang",
        lbl_cost: "Biaya Finansial ($)",
        lbl_vendor: "Vendor Pemasok / Supplier",
        lbl_eta: "Estimasi Kedatangan (ETA Logistik)",
        btn_dispatch_part: "Kirim Permintaan Pengadaan",
        table_title_parts: "Buku Register Pengadaan Logistik",
        table_sub_parts: "Pantau permintaan suku cadang masuk, status persetujuan, dan estimasi biaya.",
        th_parts_alloc: "Konteks Alokasi",
        th_parts_comp: "Komponen Diminta",
        th_parts_supplier: "Supplier Vendor",
        th_parts_cost: "Biaya Finansial",
        th_parts_eta: "ETA Logistik",
        th_parts_state: "Status Pengadaan",
        th_parts_actions: "Tindakan Admin",
        btn_approve: "Setujui Permintaan",


        // Scope History Timeline
        timeline_title: "Penjelajah Timeline Siklus Hidup Ruang Lab",
        timeline_sub: "Kueri riwayat kronologis lengkap berdasarkan nomor seri alat.",
        timeline_serial_placeholder: "Masukkan nomor seri alat endoskop (S/N)...",
        timeline_serial_label: "Nomor seri alat",
        btn_query: "Kueri",
        timeline_empty_hint: "Masukkan Nomor Seri endoskopi yang valid di atas untuk memuat siklus layanan historisnya.",
        timeline_no_records: "Tidak ada riwayat catatan layanan untuk Nomor Seri: ",
        timeline_back_dashboard: "← Kembali ke Dasbor Pelacakan",

        report_preview_title: "Pratinjau Laporan Servis",
        report_preview_hint: "Tinjau dan edit laporan halaman pertama sebelum dicetak.",
        report_heading: "Laporan Servis",
        report_subheading: "Laporan Teknis Masuk",
        report_scope_type: "Jenis Scope",
        report_brand_product: "Merek / Produk",
        report_type: "Tipe",
        report_serial: "Nomor Seri",
        report_client: "Klien",
        report_sales_person: "Sales",
        report_date: "Tanggal",
        report_location: "Lokasi",
        report_initial_complaint: "Keluhan Awal",
        report_leak_test: "Tes Kebocoran",
        report_sterilization: "Sterilisasi",
        report_sterilization_date: "Tanggal Sterilisasi",
        report_chemical: "Bahan Kimia",
        report_additional: "Laporan Tambahan",
        report_components: "Inspeksi Komponen",
        report_component: "Komponen",
        report_test: "Tes / Hasil",
        report_notes: "Catatan",
        report_status_pass: "Lulus",
        report_status_fail: "Gagal",
        report_status_pending: "Pilih hasil",
        report_service_contract: "Kontrak Servis",
        report_contract_number: "Nomor Kontrak",
        report_customer_visit: "Kunjungan Pelanggan",
        report_accessories: "Aksesori",
        report_linked_parts: "Suku Cadang Terkait",
        report_requester: "Pemohon",
        report_department: "Departemen",
        report_repair_category: "Kategori Perbaikan",
        report_ect: "ECT",
        report_signature_technician: "Teknisi",
        report_signature_customer: "Pelanggan",
        report_signature_approval: "Disetujui Oleh",
        report_save_sheet: "Simpan Perubahan ke Sheet",
        report_cancel: "Batal",
        report_print: "Cetak Laporan",
        mirror_print_report: "Cetak Laporan",
        mirror_search_label: "Cari scope",
        mirror_card_repair_stage: "Tahap perbaikan",
        mirror_card_progress: "Waktu berjalan",
        mirror_card_priority: "Prioritas · Selesaikan segera",
        mirror_card_progress_aria: "Progres jadwal perbaikan",
        mirror_card_details: "Detail scope",
        mirror_card_owner: "Penanggung jawab",
        mirror_card_start_date: "Tanggal mulai",
        mirror_card_estimated_end_date: "Perkiraan tanggal selesai",
        mirror_card_time_remaining: "Sisa waktu",
        mirror_card_reference: "Referensi",
        mirror_card_latest_note: "Catatan terbaru",
        mirror_card_add_note: "Tambah catatan scope",
        mirror_card_close_note: "Tutup catatan",
        mirror_card_note_placeholder: "Tambahkan pembaruan perbaikan atau catatan scope…",
        mirror_card_save_note: "Simpan catatan",
        mirror_card_cancel: "Batal",
        mirror_card_print_report: "Cetak laporan",
        scope_request_title: "Minta Suku Cadang",
        scope_request_hint: "Buat tiket pengadaan yang terhubung ke scope dan laporan servis ini.",
        scope_request_submit: "Minta suku cadang ini",
        scope_edit_title: "Edit Laporan Servis Scope",
        scope_edit_subtitle: "Perbarui kolom laporan, suku cadang, dan detail scope.",
        scope_request_deletion: "Minta Penghapusan Konten",
        scope_request_deletion_hint: "Ini mengirim permintaan peninjauan; teknisi tidak dapat menghapus data scope.",
        scope_deletion_reason: "Alasan permintaan",
        scope_deletion_placeholder: "Jelaskan alasan data ini perlu ditinjau untuk dihapus.",
        scope_action_edit: "Edit",
        scope_action_delete: "Hapus Data",
        scope_action_request_deletion: "Minta Penghapusan Konten",
        scope_action_cancel: "Batal",
        scope_action_save: "Simpan Perubahan Scope",
        scope_part_name: "Nama suku cadang",
        scope_part_quantity: "Jumlah",
        scope_part_estimated_price: "Estimasi harga (opsional)",
        scope_part_vendor_link: "Tautan vendor (opsional)",
        scope_part_preferred_vendor: "Vendor pilihan (opsional)",
        scope_part_notes: "Catatan / instruksi (opsional)",
        inv_delivery_speed: "Kecepatan pengiriman (1–5)",
        vendor_quality_average: "Kualitas",
        vendor_speed_average: "Kecepatan pengiriman",
        vendor_receipt_count: "observasi inventaris diterima",
        vendor_no_receipts: "Belum ada observasi inventaris diterima.",
        vendor_no_quality_rating: "Belum ada rating kualitas",
        parts_transit_empty: "Tidak ada suku cadang yang dipesan dengan detail asal, tujuan, dan ETA.",
        parts_transit_summary: "Menampilkan {count} perkiraan pengiriman secara bersamaan. Progres dihitung dari tanggal pesanan hingga ETA.",
        inv_quality_rating: "Kualitas suku cadang diterima (1–5)",
        inv_quality_notes: "Observasi penerimaan (opsional)",
        inv_quality_select_rating: "Pilih rating",
        inv_quality_select_rating: "Pilih rating",
        "34": "Menara Okular",


        // Warehouse Inventory
        inv_open_form: "Perbarui Inventaris",
        inv_close_form: "Tutup",
        inv_form_title: "Perbarui Inventaris",
        inv_form_sub: "Daftarkan batch suku cadang yang diterima, pilih kategori, dan catat kualitas vendor.",
        inv_lbl_name: "Nama / Deskripsi Komponen",
        inv_lbl_sku: "Kode SKU",
        inv_lbl_lot: "Nomor Lot / Batch (Lot #)",
        inv_lbl_stock: "Jumlah Stok Awal",
        inv_lbl_vendor: "Supplier Vendor",
        inv_btn_submit: "Simpan Jalur Aset Stok",
        inv_table_title: "Stok Tersedia",
        inv_table_sub: "Cari stok berdasarkan kategori, edit detail item, dan tinjau aktivitas barang masuk dan keluar.",
        th_inv_part: "Profil Suku Cadang (Nama / SKU)",
        th_inv_lot: "Lot #",
        th_inv_stock: "Stok Tersedia",
        th_inv_vendor: "Kanal Vendor",
        th_inv_analytics: "Analisis Penggunaan (Berdasarkan Tingkat Perbaikan)",
        inv_lbl_category: "Kategori suku cadang",
        inv_lot_label: "Nomor lot",
        inv_current_stock_label: "Stok saat ini",
        inv_adjust_quantity: "Sesuaikan jumlah stok",
        inv_quantity_adjustment_label: "Sesuaikan jumlah stok tersedia",
        inv_adjust_stock_hint: "Untuk mencatat suku cadang yang digunakan dalam perbaikan, gunakan bagian Suku Cadang Digunakan di atas.",
        inv_vendor_label: "Vendor",
        inv_search_label: "Cari persediaan",
        inv_search_placeholder: "Cari nama suku cadang, SKU, lot, vendor, atau kategori",
        inv_category_placeholder: "Pilih kategori suku cadang",
        inv_units: "unit",
        inv_set_value: "Atur nilai",
        inv_edit: "Edit",
        inv_not_recorded: "Belum dicatat",
        inv_incoming: "Barang masuk",
        inv_outgoing: "Barang keluar",
        inv_last_repair_category: "Kategori perbaikan terakhir",
        inv_repair_category_if_decrease: "Kategori perbaikan jika stok berkurang",
        inv_select_repair_category: "Pilih kategori",
        inv_empty_search: "Tidak ada item persediaan yang cocok dengan pencarian ini.",
        inv_empty_stock: "Belum ada data stok gudang.",
        inv_low_stock: "STOK RENDAH · PESAN ULANG",
        scope_consumed_title: "Suku Cadang Digunakan",
        scope_consumed_subtitle: "Pilih stok gudang untuk ditautkan dan digunakan pada perbaikan ini. Stok akan berkurang saat ditautkan.",
        scope_consumed_available: "Item persediaan tersedia",
        scope_consumed_choose: "Pilih suku cadang dan lot",
        scope_consumed_option: "{name} · {sku} · Lot {lot} · tersedia {available}",
        scope_consumed_quantity: "Jumlah",
        scope_consumed_available_summary: "Stok tersedia: {available} · Sisa setelah digunakan: {remaining}",
        scope_consumed_select_item_hint: "Pilih suku cadang dan lot untuk memeriksa stok yang tersedia.",
        scope_consumed_quantity_error: "Masukkan jumlah bilangan bulat dari 1 hingga {available}.",
        scope_consumed_category_error: "Pilih kategori perbaikan untuk penggunaan stok ini.",
        scope_consumed_button_hint: "Tindakan ini mencatat barang keluar dan menautkannya ke scope ini.",
        scope_consumed_repair_category: "Kategori perbaikan",
        scope_consumed_select_category: "Pilih kategori perbaikan",
        scope_consumed_link: "Gunakan jumlah dan tautkan ke scope",
        scope_consumed_none_available: "Tidak ada persediaan yang tersedia untuk ditautkan ke perbaikan ini.",
        scope_consumed_none_linked: "Belum ada suku cadang persediaan yang ditautkan ke scope ini.",


        // Admin Terminal
        admin_gate_title: "Autentikasi Terminal Rahasia",
        admin_gate_btn: "INISIALISASI_SESI()",
        admin_todo_title: "Daftar Periksa Harian Lab",
        admin_scratch_title: "Catatan Cepat Sementara (Scratchpad)",
        admin_note_title: "Tambahkan Catatan Rahasia Teknisi",
        admin_lbl_sn: "Tautan Nomor Seri Alat",
        admin_lbl_title: "Klasifikasi Topik",
        admin_lbl_comments: "Komentar Internal Teknisi",
        admin_btn_write: "TULIS_CATATAN_KE_CLOUD()",
        admin_journal_title: "Indeks Jurnal Internal Terenkripsi",
        th_admin_time: "Waktu Entri",
        th_admin_sn: "Nomor Seri Terkait",
        th_admin_topic: "Judul Topik",
        th_admin_comments: "Komentar Internal",


        // System Toasts & Alerts
        toast_transmitting: "📡 SINKRONISASI_CLOUD: mengirim paket data...",
        toast_synced: "✓ SINKRONISASI_CLOUD: Google Sheets berhasil diperbarui!",
        alert_low_stock: "PERINGATAN STOK MENIPIS:",
        alert_predictive: "ANOMALI KERUSAKAN BERULANG TERDETEKSI:",
        msg_saved_synced: "Laporan tersimpan di memori lokal & disinkronkan ke Google Sheets!",
        msg_deleted_synced: "Data dihapus secara permanen dan sinyal sinkronisasi dikirim.",


        // 33 Anatomy Components (ID)
        "01": "Karet Tekuk (Bending Rubber)", "02": "Ujung Kamera (Distal Head)", "03": "Nozel Udara/Air (Nozzle Air/Water)", "04": "Lensa Kamera (Camera Lens)",
        "05": "Lensa Panduan Cahaya (Light Guide Lens)", "06": "Saluran Biopsi (Biopsy Channel)", "07": "Bagian Pembengkokan (Bending Section)", "08": "Tabung Insersi (Insertion Tube)",
        "09": "Boot Karet Pelindung Stres #1", "10": "Lubang Masuk Biopsi (Biopsy Inlet Port)", "11": "Badan Kontrol Utama (Control Body)", "12": "Angulasi Atas (Angulation Up)",
        "13": "Angulasi Bawah (Angulation Down)", "14": "Angulasi Kiri (Angulation Left)", "15": "Angulasi Kanan (Angulation Right)", "16": "Rem Angulasi U/D (Brake U/D)",
        "17": "Rem Angulasi L/R (Brake L/R)", "18": "Saluran Udara/Air (Air Water Channel)", "19": "Saluran Hisap (Suction Channel)", "20": "Sakelar Listrik / Remote (1, 2, 3, 4, 5)",
        "21": "Boot Karet Pelindung Stres #2", "22": "Tabung Panduan Cahaya (Light Guide Tube)", "23": "Boot Karet Pelindung Stres #3", "24": "Casing Konektor Listrik (Electrical Housing)",
        "25": "Unit Jarum Listrik (Electrical Pin Unit)", "26": "Prong Panduan Cahaya (Light Guide Prong)", "27": "Saluran Air Tambahan (Aux Water Inlet/Jet)", "28": "Pengencang Rem (Tensioner)",
        "29": "Sensor Kamera CCD / NBI / Eyescan", "30": "Tuas Pengangkat Alur (Elevator Lever)", "31": "Saluran Lift Terbuka (Channel Elevator)", "32": "Lengan Penggerak Mekanis (Actuator Arm)",
        "33": "Serat Gambar Optik (Fiber Image / Ocular Tower)"
    }
};


/* ==========================================================================
   2. PRIMARY APPLICATION STORE & DATA REPOSITORIES
   ========================================================================== */
const EndoAppStore = {
    logsKey: 'endolog_pro_master_v3_logs',
    partsKey: 'endolog_pro_master_v3_parts_v2',
    inventoryKey: 'endolog_pro_master_v3_inventory_ledger',
    adminNotesKey: 'endolog_pro_private_admin_notes',
    adminTodoKey: 'endolog_pro_terminal_todo_matrix',
    adminScratchpadKey: 'endolog_pro_terminal_scratchpad_string',
    roleSessionKey: 'endolog_verified_user_role_v1',
    authTokenSessionKey: 'endolog_auth_token_v1',


    // Google Apps Script Web App Deployment URL
    googleWebhookUrl: 'https://script.google.com/macros/s/AKfycbxnC7KydhfkQwyeOTGwqstzMnv_2fURQ9_JZ0R6-yjatG0_uNghUxSnCxpfkKK7qmFUkA/exec',


    serviceLogs: [],
    partsOrders: [],
    inventoryPool: [],
    inventoryMovements: [],
    vendorRatings: [],
    vendorQualityEvents: [],
    adminNotes: [],
    terminalTodos: [],


    activeLanguage: 'en',
    adminAuthenticated: false,
    currentUserRole: null,
    currentAuthToken: null,
    editingScopeLogId: null,
    activeHistorySerial: '',
    mirrorTab: 'active',
    selectedTransitOrderId: '',
    cachedOverdueCount: 0,
    currentActiveView: 'mirror',
    mirrorCategories: [
        'Overhaul', 'Major', 'Medium', 'Minor', 'Overhaul + CCD', 'Major + CCD',
        'Medium + CCD', 'Repair Exchange', 'Warranty', 'Cancelled', 'Backup Scope', 'Level 1'
    ],
    mirrorBrands: ['Olympus', 'Pentax', 'FujiFilm', 'Karl Storz', 'Rigid Scope', 'Fujinon'],
    mirrorStages: [
        'Pre QC', 'Disassemble', 'Identify Parts', 'Buy Parts', 'Waiting for Parts',
        'Parts Ready', 'Repair', 'Installing', 'Finishing', 'QC', 'Ready', 'In Warranty Period'
    ],
    inventoryCategories: [
        'A/W Channel', 'A/W Nozzle', 'Angulation Cable / Wire', 'Angulation Cable Stopper',
        'Auxiliary Channel', 'Barrel Angulation', 'Bending Mesh', 'Bending Rubber',
        'Bending Section', 'Biopsy Channel', 'CCD', 'C-Cover', 'Coil-Pipe',
        'Coil Pipe Align', 'Coil Pipe Retainer', 'Coil Pipe Stopper', 'Control Body',
        'Distal Tip', 'Elevator Actuator CBL', 'Flexible Circuit', 'Fittings',
        'Insertion Tube', 'Light Guide Bundle', 'Light Guide Lens', 'Light Guide Tube',
        'O-Ring', 'O-Ring Tensioner', 'Piston Switch', 'Ribbon Circuit', 'Switchbox',
        'Switch Button', 'Tensioner', 'Other'
    ],


    /* ----------------------------------------------------------------------
       Bootstrap Engine
       ---------------------------------------------------------------------- */
    applyTheme(theme) {
        const activeTheme = theme === 'dark' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', activeTheme);
        localStorage.setItem('endolog_pro_active_theme', activeTheme);
        this.syncAuthThemeToggle();
    },

    syncAuthThemeToggle() {
        const button = document.getElementById('authThemeToggle');
        if (!button) return;
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        const themeAction = isDark ? 'light' : 'dark';
        const dict = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;
        const text = dict[`auth_theme_${themeAction}`];
        button.setAttribute('aria-label', text);
        button.title = text;
        button.setAttribute('aria-pressed', String(isDark));
    },

    bindAuthThemeToggle() {
        const button = document.getElementById('authThemeToggle');
        if (!button || button.hasAttribute('data-bound')) return;
        button.setAttribute('data-bound', 'true');
        button.addEventListener('click', () => {
            this.applyTheme(document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        });
    },

    init() {
        this.activeLanguage = localStorage.getItem('endolog_pro_active_lang') || 'en';
        const persistedTheme = localStorage.getItem('endolog_pro_active_theme');
        this.applyTheme(persistedTheme === 'dark' ? 'dark' : 'light');
        this.bindAuthThemeToggle();
        const userActiveRole = sessionStorage.getItem(this.roleSessionKey);
        const authToken = sessionStorage.getItem(this.authTokenSessionKey);
        if ((userActiveRole === 'admin' || userActiveRole === 'tech') && authToken) {
            this.validateStoredSession(authToken);
            return;
        }
        sessionStorage.removeItem(this.roleSessionKey);
        sessionStorage.removeItem(this.authTokenSessionKey);
        this.bindAuthenticationForm();
    },


    validateStoredSession(token) {
        fetch(this.googleWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ type: 'VALIDATE_ROLE_SESSION', authToken: token })
        })
            .then(response => {
                if (!response.ok) throw new Error(`Authentication server returned ${response.status}.`);
                return response.json();
            })
            .then(data => {
                const verifiedRole = data.result || data.role;
                if ((verifiedRole !== 'admin' && verifiedRole !== 'tech') || !data.token) {
                    throw new Error('Your session expired. Please sign in again.');
                }
                sessionStorage.setItem(this.roleSessionKey, verifiedRole);
                sessionStorage.setItem(this.authTokenSessionKey, data.token);
                this.startApplication(verifiedRole, data.token);
            })
            .catch(error => {
                console.error('Stored role session could not be verified:', error);
                sessionStorage.removeItem(this.roleSessionKey);
                sessionStorage.removeItem(this.authTokenSessionKey);
                this.bindAuthenticationForm();
                const message = document.getElementById('authGateMessage');
                if (message) message.textContent = `${error.message} Enter your passcode to continue.`;
            });
    },


    bindAuthenticationForm() {
        const form = document.getElementById('authGateForm');
        const message = document.getElementById('authGateMessage');
        const submitButton = document.getElementById('authSubmitButton');
        if (!form || form.hasAttribute('data-bound')) return;
        form.setAttribute('data-bound', 'true');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const passcode = String(new FormData(form).get('passcode') || '').trim();
            if (!passcode) {
                if (message) message.textContent = 'Enter your passcode to continue.';
                return;
            }
            if (submitButton) submitButton.disabled = true;
            if (message) message.textContent = 'Verifying access…';

            fetch(this.googleWebhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ type: 'VALIDATE_ADMIN_CHALLENGE', passcode })
            })
                .then(response => {
                    if (!response.ok) throw new Error(`Authentication server returned ${response.status}.`);
                    return response.json();
                })
                .then(data => {
                    const verifiedRole = data.result || data.role;
                    if ((verifiedRole !== 'admin' && verifiedRole !== 'tech') || !data.token) {
                        throw new Error('The passcode was not accepted.');
                    }
                    sessionStorage.setItem(this.roleSessionKey, verifiedRole);
                    sessionStorage.setItem(this.authTokenSessionKey, data.token);
                    this.startApplication(verifiedRole, data.token);
                })
                .catch(error => {
                    console.error('Role verification failed:', error);
                    if (message) message.textContent = `Could not verify access: ${error.message}`;
                })
                .finally(() => {
                    if (submitButton) submitButton.disabled = false;
                });
        });
    },




    startApplication(role, authToken) {
        this.currentUserRole = role;
        this.currentAuthToken = authToken || sessionStorage.getItem(this.authTokenSessionKey);
        this.adminAuthenticated = role === 'admin';
        const authGate = document.getElementById('authGate');
        const appRoot = document.getElementById('appRoot');
        if (authGate) authGate.hidden = true;
        if (appRoot) appRoot.hidden = false;
        this.loadState();
        this.bindGlobalNavigation();
        this.bindFormSubmissions();
        this.bindScopeTimelineDateFields();
        this.bindSearchAndFilters();
        this.bindActionTriggers();
        this.initAnatomyStyleListeners();
        this.bindLanguageSelectorListener();
        this.applyRolePrivilegeLockdowns(role);
        this.applyGlobalLanguageTranslations();
        this.renderAll();
        const mirrorNav = document.getElementById('navLinkMirrorDashboard');
        if (mirrorNav) mirrorNav.click();
        this.initBackgroundRefresh();
    },


    loadState() {
        try {
            const rawLogs = localStorage.getItem(this.logsKey);
            const rawParts = localStorage.getItem(this.partsKey);
            const rawInv = localStorage.getItem(this.inventoryKey);
            const rawInventoryMovements = localStorage.getItem('endolog_inventory_movements_v1');
            const rawVendorRatings = localStorage.getItem('endolog_vendor_quality_v1');
            const rawVendorQualityEvents = localStorage.getItem('endolog_vendor_quality_events_v1');
            const rawNotes = localStorage.getItem(this.adminNotesKey);
            const rawTodos = localStorage.getItem(this.adminTodoKey);


            this.serviceLogs = rawLogs ? JSON.parse(rawLogs) : [];
            this.partsOrders = rawParts ? JSON.parse(rawParts) : [];
            this.inventoryPool = rawInv ? JSON.parse(rawInv) : [];
            this.inventoryMovements = rawInventoryMovements ? JSON.parse(rawInventoryMovements) : [];
            this.vendorRatings = rawVendorRatings ? JSON.parse(rawVendorRatings) : [];
            this.vendorQualityEvents = rawVendorQualityEvents ? JSON.parse(rawVendorQualityEvents) : [];
            this.adminNotes = rawNotes ? JSON.parse(rawNotes) : [];
            this.terminalTodos = rawTodos ? JSON.parse(rawTodos) : [];


            // Seed initial clinical baseline data if entirely fresh
            if (this.serviceLogs.length === 0 && this.inventoryPool.length === 0) {
                this.seedInitialPrototypeData();
            }
        } catch (e) {
            console.error("Local client memory sync parsing failure:", e);
            this.serviceLogs = [];
            this.partsOrders = [];
            this.inventoryPool = [];
            this.inventoryMovements = [];
            this.vendorRatings = [];
            this.vendorQualityEvents = [];
            this.adminNotes = [];
            this.terminalTodos = [];
        }
    },


    saveState() {
        try {
            localStorage.setItem(this.logsKey, JSON.stringify(this.serviceLogs));
            localStorage.setItem(this.partsKey, JSON.stringify(this.partsOrders));
            localStorage.setItem(this.inventoryKey, JSON.stringify(this.inventoryPool));
            localStorage.setItem('endolog_inventory_movements_v1', JSON.stringify(this.inventoryMovements));
            localStorage.setItem('endolog_vendor_quality_v1', JSON.stringify(this.vendorRatings));
            localStorage.setItem('endolog_vendor_quality_events_v1', JSON.stringify(this.vendorQualityEvents));
            localStorage.setItem(this.adminNotesKey, JSON.stringify(this.adminNotes));
            localStorage.setItem(this.adminTodoKey, JSON.stringify(this.terminalTodos));
        } catch (e) {
            console.error("Failed saving state to localStorage:", e);
        }
        this.renderNotifications();
        this.executePredictivePatternAnalysis();
        this.updateMetrics();
    },


    /* ----------------------------------------------------------------------
       Initial Demo Data Seeder (Ensures UI is never completely empty)
       ---------------------------------------------------------------------- */
    seedInitialPrototypeData() {
        this.inventoryPool = [
            {
                partName: "Bending Rubber Sleeve 11.8mm",
                sku: "SKU-BR-118",
                lotNumber: "LOT-2026-A1",
                currentStock: 12,
                category: 'Bending Rubber',
                incomingDate: new Date().toISOString(),
                outgoingDate: '',
                vendor: "Olympus Medical Supplies",
                usedInMinor: 2, usedInMedium: 1, usedInMajor: 0, usedInOverhaul: 0, usedInMajorCCD: 0, usedInOverhaulCCD: 0, usedInWarranty: 0
            },
            {
                partName: "Biopsy Channel Teflon Tubing 2.8mm",
                sku: "SKU-BIO-28",
                lotNumber: "LOT-2026-B4",
                currentStock: 4, // Triggers low-stock alert banner
                category: 'Biopsy Channel',
                incomingDate: new Date().toISOString(),
                outgoingDate: '',
                vendor: "EndoTech Precision Ltd",
                usedInMinor: 1, usedInMedium: 3, usedInMajor: 1, usedInOverhaul: 0, usedInMajorCCD: 0, usedInOverhaulCCD: 0, usedInWarranty: 1
            },
            {
                partName: "Air/Water Dual Nozzle Head",
                sku: "SKU-NOZ-AW01",
                lotNumber: "LOT-2026-C9",
                currentStock: 15,
                category: 'A/W Nozzle',
                incomingDate: new Date().toISOString(),
                outgoingDate: '',
                vendor: "Fujinon Clinical Direct",
                usedInMinor: 0, usedInMedium: 2, usedInMajor: 0, usedInOverhaul: 0, usedInMajorCCD: 0, usedInOverhaulCCD: 0, usedInWarranty: 0
            }
        ];


        const pastDate35Days = new Date(Date.now() - (35 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
        const pastDate10Days = new Date(Date.now() - (10 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];


        this.serviceLogs = [
            {
                id: 'LOG-1001',
                timestamp: new Date(Date.now() - 36000000).toLocaleString(),
                scopeModel: "GIF-H190",
                scopeType: "Gastroscope",
                serialNumber: "SN-2904812",
                clientFacility: "Central Clinical Hospital Wing B",
                technicianName: "Agus Pratama",
                logDate: pastDate35Days,
                scopeStatusState: "In Repair",
                warrantyStatus: "No Warranty",
                repairComplexity: "Minor",
                downPaymentDate: pastDate35Days, // Overdue (> 30 days)
                inspectionStatus: "Fail",
                complaintText: "Suction channel clogged; bending rubber leaking fluid.",
                mediaUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
                repairNotes: "[Initial Triage] Distal rubber punctured. Replacement ordered.",
                requestedPartName: "SKU-BR-118",
                anatomyChecklist: {
                    comp_01: { status: 'Fail', desc: 'Perforated distal outer layer' },
                    comp_06: { status: 'Fail', desc: 'Residue blockage in channel' },
                    comp_02: { status: 'Pass', desc: 'Distal head intact' }
                }
            },
            {
                id: 'LOG-1002',
                timestamp: new Date(Date.now() - 7200000).toLocaleString(),
                scopeModel: "CF-HQ190L",
                scopeType: "Colonoscope",
                serialNumber: "SN-3419088",
                clientFacility: "Metropolitan Surgical Center",
                technicianName: "Budi Santoso",
                logDate: pastDate10Days,
                scopeStatusState: "Waiting for Parts",
                warrantyStatus: "Active Warranty Coverage",
                repairComplexity: "Warranty",
                downPaymentDate: pastDate10Days,
                inspectionStatus: "Pending",
                complaintText: "Angulation controls feel loose and unresponsive on Up/Down wheel.",
                mediaUrl: "",
                repairNotes: "[Inspection] Angulation wire tension degraded. Calibration scheduled.",
                requestedPartName: "",
                anatomyChecklist: {
                    comp_12: { status: 'Fail', desc: 'Free play > 15 degrees' },
                    comp_13: { status: 'Fail', desc: 'Cable friction slippage' }
                }
            }
        ];


        this.partsOrders = [
            {
                id: 'PRT-9001',
                bindingType: 'scope',
                serialNumber: 'SN-2904812',
                partName: 'Bending Rubber Sleeve 11.8mm',
                supplier: 'Olympus Medical Supplies',
                cost: '85.00',
                partEta: '2-3 Business Days',
                status: 'Awaiting Approval'
            }
        ];


        this.adminNotes = [
            {
                id: 'NOTE-1',
                timestamp: new Date().toLocaleString(),
                serialRef: 'SN-2904812',
                title: 'Down Payment Reconciliation',
                content: 'Client agreed to expedited overhaul cost split. Awaiting accounting approval.'
            }
        ];


        this.terminalTodos = [
            { id: 'TD-1', text: 'Calibrate angulation wheel on SN-3419088', done: false },
            { id: 'TD-2', text: 'Leak test replacement bending rubber on SN-2904812', done: true }
        ];


        this.saveState();
    }
};


/* ==========================================================================
   3. GOOGLE SHEETS CLOUD DISPATCH PIPELINE & NETWORK TOASTS
   ========================================================================== */
EndoAppStore.syncRecordToGoogleSheets = async function(payloadData) {
    if (!this.googleWebhookUrl) {
        console.warn("Google Webhook URL not configured. Storing in local state only.");
        return false;
    }
    if (!this.currentAuthToken) {
        console.error('Google Sheets synchronization blocked: authenticated session token is missing.');
        return false;
    }


    this.showNetworkToastNotification(true);


    try {
        const payloadString = JSON.stringify({ ...payloadData, authToken: this.currentAuthToken });


        const response = await fetch(this.googleWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: payloadString
        });
        if (!response.ok) throw new Error(`Google Apps Script returned ${response.status}.`);
        const result = await response.json();
        if (result.status && result.status !== 'SUCCESS') {
            throw new Error(result.message || `Google Apps Script reported ${result.status}.`);
        }


        // Flash success state in toast
        const toast = document.getElementById('appNetworkSyncToast');
        if (toast) {
            const dict = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;
            toast.innerText = dict.toast_synced;
            toast.style.borderColor = '#22c55e';
            toast.style.color = '#22c55e';
        }


        setTimeout(() => this.showNetworkToastNotification(false), 1400);
        return true;
    } catch (err) {
        console.error("Google Sheets synchronization error:", err);
        const toast = document.getElementById('appNetworkSyncToast');
        if (toast) {
            toast.innerText = `CLOUD_SYNC failed: ${err.message}`;
            toast.style.borderColor = '#dc2626';
            toast.style.color = '#dc2626';
            toast.style.display = 'block';
        }
        setTimeout(() => this.showNetworkToastNotification(false), 5000);
        return false;
    }
};


EndoAppStore.showNetworkToastNotification = function(show) {
    let toast = document.getElementById('appNetworkSyncToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'appNetworkSyncToast';
        toast.className = 'app-network-toast';
        document.body.appendChild(toast);
    }
    const dict = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;
    toast.innerText = dict.toast_transmitting;
    toast.style.borderColor = '#38bdf8';
    toast.style.color = '#38bdf8';
    toast.style.display = show ? 'block' : 'none';
};


EndoAppStore.showMirrorToast = function(message, isError) {
    let toast = document.getElementById('mirrorUpdateToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'mirrorUpdateToast';
        toast.className = 'mirror-update-toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        document.body.appendChild(toast);
    }
    window.clearTimeout(this.mirrorToastTimeout);
    toast.textContent = message;
    toast.classList.toggle('is-error', Boolean(isError));
    toast.classList.add('is-visible');
    this.mirrorToastTimeout = window.setTimeout(() => toast.classList.remove('is-visible'), 3000);
};


/* ==========================================================================
   4. SYSTEM NOTIFICATIONS & PREDICTIVE ANALYTICS ENGINE
   ========================================================================== */
EndoAppStore.renderNotifications = function() {
    const alertsDeck = document.getElementById('systemAlertsBannerDeck');
    if (!alertsDeck) return;
    alertsDeck.innerHTML = '';


    const dict = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;
    const now = new Date();
    const overdueLogs = this.getOverdueScopeLogs(now);


    // A. Detect Overdue Scopes
    overdueLogs.forEach(log => {
        const deadline = this.getScopeDeadline(log);
        const diffDays = Math.ceil((now - deadline) / (1000 * 60 * 60 * 24));
        const banner = document.createElement('div');
        banner.className = 'alert-banner alert-danger';
        banner.innerHTML = `
            <span>🚨 <strong>${dict.metric_overdue_badge}:</strong> Scope <code>${this.escapeHtml(log.serialNumber)}</code> (${this.escapeHtml(log.scopeModel)}) is overdue by <strong>${diffDays} days</strong>!</span>
            <span style="font-size:11px; opacity:0.9; font-weight:700;">S/N: ${this.escapeHtml(log.serialNumber)}</span>
        `;
        alertsDeck.appendChild(banner);
    });


    this.cachedOverdueCount = overdueLogs.length;


    // B. Detect low stock only when fewer than two units remain.
    this.inventoryPool.forEach(item => {
        if (Number(item.currentStock) < 2) {
            const banner = document.createElement('div');
            banner.className = 'alert-banner alert-warning';
            banner.innerHTML = `
                <span>⚙️ <strong>${dict.alert_low_stock}</strong> SKU <code>${item.sku}</code> (<em>${item.partName}</em>) has only <strong>${item.currentStock} units</strong> remaining in warehouse!</span>
                <span style="font-size:11px; opacity:0.9; font-weight:700;">STOCK CRITICAL</span>
            `;
            alertsDeck.appendChild(banner);
        }
    });
};


EndoAppStore.isActiveScopeLog = function(log) {
    return ['In Repair', 'Waiting for Parts', 'Incoming (Pending Report)'].includes(log.scopeStatusState);
};


EndoAppStore.getScopeDeadline = function(log) {
    return this.getScopeTimeline(log).dueDate;
};


EndoAppStore.getScopeTimeline = function(log, now) {
    const tracking = log.scopeTracking || {};
    const category = tracking.repairCategory || log.repairComplexity || '';
    const isWarranty = category === 'Warranty' || log.warrantyStatus === 'Active Warranty Coverage';
    const startValue = tracking.startDate || log.downPaymentDate || log.logDate || '';
    const parseDate = value => {
        if (!value) return null;
        const dateOnly = String(value).match(/^(\d{4})-(\d{2})-(\d{2})$/);
        const date = dateOnly
            ? new Date(Number(dateOnly[1]), Number(dateOnly[2]) - 1, Number(dateOnly[3]))
            : new Date(value);
        return Number.isNaN(date.getTime()) ? null : date;
    };
    const startDate = parseDate(startValue);
    const current = now || new Date();
    const currentDate = new Date(current.getFullYear(), current.getMonth(), current.getDate());
    if (isWarranty) {
        return {
            category, startDate, dueDate: null, slaDays: null, daysRemaining: null,
            progress: 100, warning: 'critical', ect: 'Complete ASAP', isWarranty: true
        };
    }
    if (!startDate) {
        return {
            category, startDate: null, dueDate: null, slaDays: null, daysRemaining: null,
            progress: 0, warning: 'unknown', ect: 'Set start date'
        };
    }


    const slaDays = ['Overhaul + CCD', 'Overhaul', 'Major + CCD'].includes(category) ? 60 : 30;
    const dueDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + slaDays);
    const dayMilliseconds = 24 * 60 * 60 * 1000;
    const daysRemaining = Math.ceil((dueDate.getTime() - currentDate.getTime()) / dayMilliseconds);
    const completed = tracking.repairStage === 'Ready' || Boolean(tracking.isOutOfLab) ||
        log.scopeStatusState === 'Dispatched / Completed';
    const progress = completed ? 100 : Math.min(100, Math.max(0,
        ((currentDate.getTime() - new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()).getTime()) /
            (slaDays * dayMilliseconds)) * 100));
    const warning = daysRemaining < 0 ? 'overdue' : daysRemaining <= 7 ? 'warning' : 'safe';
    const ect = daysRemaining < 0
        ? `${Math.abs(daysRemaining)} days overdue`
        : `${daysRemaining} days remaining`;
    return { category, startDate, dueDate, slaDays, daysRemaining, progress, warning, ect, isWarranty: false };
};


EndoAppStore.formatScopeDateInput = function(date) {
    if (!date || Number.isNaN(date.getTime())) return '';
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};




EndoAppStore.updateServiceReportEstimatedEndDate = function() {
    const output = document.getElementById('scopeEstimatedEndDate');
    const hint = document.getElementById('scopeEstimatedEndDateHint');
    if (!output) return;
    const category = document.getElementById('repairComplexity')?.value || '';
    const startDate = document.getElementById('downPaymentDate')?.value ||
        document.getElementById('logDate')?.value || '';
    const timeline = this.getScopeTimeline({
        repairComplexity: category,
        downPaymentDate: startDate
    });
    output.value = timeline.dueDate
        ? this.formatScopeDateInput(timeline.dueDate)
        : timeline.isWarranty ? 'Complete ASAP' : 'Select a repair category and start date';
    if (hint) {
        hint.textContent = timeline.isWarranty
            ? 'Warranty scopes are prioritized for completion as soon as possible.'
            : timeline.dueDate
                ? `${timeline.slaDays}-day timeline · ${timeline.ect}`
                : 'Calculated automatically from the repair category and down payment date.';
    }
};


EndoAppStore.bindScopeTimelineDateFields = function() {
    const form = document.getElementById('serviceReportForm');
    if (!form || form.dataset.timelineBound === 'true') return;
    form.dataset.timelineBound = 'true';
    const update = event => {
        if (['repairComplexity', 'downPaymentDate', 'logDate'].includes(event.target.id)) {
            this.updateServiceReportEstimatedEndDate();
        }
    };
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    this.updateServiceReportEstimatedEndDate();
};


EndoAppStore.getOverdueScopeLogs = function(now) {
    const currentTime = now || new Date();
    const currentDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
    return this.serviceLogs.filter(log => {
        const category = log.scopeTracking?.repairCategory || log.repairComplexity;
        if (!log.scopeStatusState ||
            log.scopeStatusState === 'Backup Stock Pool' ||
            log.scopeStatusState === 'Dispatched / Completed' ||
            category === 'Warranty' ||
            log.warrantyStatus === 'Active Warranty Coverage') return false;
        const deadline = this.getScopeDeadline(log);
        return deadline !== null && currentDate > deadline;
    });
};


EndoAppStore.createDefaultScopeTracking = function(log) {
    const category = this.mirrorCategories.includes(log.repairComplexity) ? log.repairComplexity : '';
    const stageByStatus = {
        'Incoming (Pending Report)': 'Pre QC',
        'In Repair': 'Repair',
        'Waiting for Parts': 'Waiting for Parts',
        'Backup Stock Pool': 'Ready',
        'Dispatched / Completed': 'Ready'
    };
    return {
        repairCategory: category,
        brandScopeType: this.mirrorBrands.includes(log.scopeType) ? log.scopeType : '',
        scopeModel: log.scopeModel || '',
        serialNumber: log.serialNumber || '',
        startDate: log.downPaymentDate || log.logDate || '',
        endDate: '',
        progress: null,
        notes: log.repairNotes || '',
owner: log.technicianName || '',
        repairStage: stageByStatus[log.scopeStatusState] || 'Pre QC',
        refOther: '',
        isOutOfLab: log.scopeStatusState === 'Dispatched / Completed',
        warrantyUntil: '',
        estimatedEndDate: this.formatScopeDateInput(this.getScopeTimeline(log).dueDate)
    };
};


EndoAppStore.getScopeTracking = function(log) {
    const tracking = Object.assign(this.createDefaultScopeTracking(log), log.scopeTracking || {});
    tracking.repairCategory = tracking.repairCategory || log.repairComplexity || '';
    tracking.scopeModel = tracking.scopeModel || log.scopeModel || '';
    tracking.serialNumber = tracking.serialNumber || log.serialNumber || '';
    tracking.startDate = tracking.startDate || log.downPaymentDate || log.logDate || '';
    tracking.notes = tracking.notes || log.repairNotes || '';
    tracking.owner = tracking.owner || log.technicianName || '';
    if (!this.mirrorStages.includes(tracking.repairStage)) tracking.repairStage = 'Pre QC';
    const timeline = this.getScopeTimeline({ ...log, scopeTracking: tracking });
    tracking.estimatedEndDate = this.formatScopeDateInput(timeline.dueDate);
    return tracking;
};


EndoAppStore.getMirrorLifecycle = function(log, now) {
    const tracking = this.getScopeTracking(log);
    const currentTime = now || new Date();
    const category = tracking.repairCategory;
    const stage = tracking.repairStage;
    const stageIsWarranty = stage === 'In Warranty Period';
    let warrantyRemaining = null;
    if (stageIsWarranty && tracking.endDate) {
        const endDate = new Date(tracking.endDate);
        if (!Number.isNaN(endDate.getTime())) {
            const warrantyDeadline = tracking.warrantyUntil
                ? new Date(tracking.warrantyUntil)
                : new Date(endDate.getTime() + 90 * 24 * 60 * 60 * 1000);
            if (!Number.isNaN(warrantyDeadline.getTime())) {
                warrantyRemaining = warrantyDeadline.getTime() > currentTime.getTime()
                    ? Math.ceil((warrantyDeadline - currentTime) / (24 * 60 * 60 * 1000))
                    : -1;
            }
        }
    }


    const isWarrantyActive = stageIsWarranty && warrantyRemaining !== null && warrantyRemaining >= 0;
    const isExpiredWarranty = stageIsWarranty && !isWarrantyActive;
    const isBackup = category === 'Backup Scope' || log.scopeStatusState === 'Backup Stock Pool';
    const isReadyForPickup = stage === 'Ready' && !tracking.isOutOfLab &&
        !isBackup && category !== 'Cancelled';
    const isCompletedOutOfLab = Boolean(tracking.isOutOfLab) && !isBackup;
    const isCompleted = isReadyForPickup;
    const isActive = !isReadyForPickup && !stageIsWarranty && !tracking.isOutOfLab &&
        category !== 'Cancelled' && !isBackup;


    const timeline = this.getScopeTimeline({ ...log, scopeTracking: tracking }, currentTime);
    const slaDays = timeline.slaDays;
    const daysRemaining = timeline.daysRemaining;
    const dueDate = timeline.dueDate;
    const progress = stageIsWarranty || tracking.isOutOfLab ? 100 : timeline.progress;


    return {
        tracking,
        timeline,
        isActive,
        isCompleted,
        isWarrantyActive,
        isExpiredWarranty,
        isReadyForPickup,
        isCompletedOutOfLab,
        isBackup,
        warrantyRemaining,
        slaDays,
        dueDate,
        daysRemaining,
        progress,
        warning: stageIsWarranty
                ? isWarrantyActive ? (warrantyRemaining <= 7 ? 'warning' : 'safe') : 'expired'
                : timeline.warning
    };
};


EndoAppStore.getMirrorRows = function() {
    const now = new Date();
    return this.serviceLogs.map(log => ({
        log,
        lifecycle: this.getMirrorLifecycle(log, now)
    })).filter(({ lifecycle }) =>
        lifecycle.isActive || lifecycle.isCompleted || lifecycle.isWarrantyActive ||
            lifecycle.isCompletedOutOfLab || lifecycle.isBackup
    );
};


EndoAppStore.serviceReportChecklistParts = [
    { name: 'Bending Rubber' },
    { name: 'Distal Kepala' },
    { name: 'Nozzle Udara/Air' },
    { name: 'Lensa Kamera' },
    { name: 'Lensa Cahaya' },
    { name: 'Biopsy Saluran Keluar' },
    { name: 'Bending Section' },
    { name: 'Insertion Tube' },
    { name: 'Stress Rubber Boot #1' },
    { name: 'Biopsy Saluran Masuk' },
    { name: 'Control Body' },
    { name: 'Angulasi Up' },
    { name: 'Angulasi Down' },
    { name: 'Angulasi Left' },
    { name: 'Angulasi Right' },
    { name: 'Rem U/D' },
    { name: 'Rem L/R' },
    { name: 'Saluran Udara/Air' },
    { name: 'Saluran Sedot' },
    { name: 'Tombol 1, 2, 3, 4' },
    { name: 'Stress Rubber Boot #2' },
    { name: 'Light Guide Tube' },
    { name: 'Stress Rubber Boot #3' },
    { name: 'Electrical Housing' },
    { name: 'Electrical Pin Unit' },
    { name: 'Light Guide Prong' },
    { name: 'Aux water inlet/Jet channel' },
    { name: 'Tensioner' },
    { name: 'Camera CCD / NBI / Eyescan' },
    { name: 'Tuas Elevator', group: 'ERCP' },
    { name: 'Channel Elevator', group: 'ERCP' },
    { name: 'Actuator Arm', group: 'ERCP' },
    { name: 'Fiber Image', group: 'FIBER' },
    { name: 'Ocular Tower', group: 'FIBER' }
];


EndoAppStore.renderServiceReportChecklist = function(log, preserveEdits) {
    const left = document.getElementById('serviceReportChecklistLeft');
    const right = document.getElementById('serviceReportChecklistRight');
    if (!left || !right) return;
    const anatomy = log.anatomyChecklist && typeof log.anatomyChecklist === 'object'
        ? log.anatomyChecklist : {};
    const reportComponents = log.reportChecklist?.components || {};
    const dict = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;
    const previousValues = new Map();
    if (preserveEdits) {
        document.querySelectorAll('#serviceReportPaper [data-report-check-index]').forEach(control => {
            const index = control.dataset.reportCheckIndex;
            const component = previousValues.get(index) || {};
            component[control.dataset.reportCheckProperty] = control.value;
            previousValues.set(index, component);
        });
    }
    left.replaceChildren();
    right.replaceChildren();
    const renderRow = (part, index) => {
        const row = document.createElement('tr');
        if (part.group) {
            const groupRow = document.createElement('tr');
            groupRow.className = 'service-report-checklist-group';
            const groupCell = document.createElement('th');
            groupCell.colSpan = 4;
            groupCell.textContent = part.group;
            groupRow.appendChild(groupCell);
            (index < 18 ? left : right).appendChild(groupRow);
        }


        const checklistIndex = index + 1;
        const savedComponent = reportComponents[String(checklistIndex)] || {};
        const anatomyComponent = anatomy[`comp_${String(Math.min(checklistIndex, 33)).padStart(2, '0')}`] || {};
        const current = Object.assign({}, anatomyComponent, savedComponent);
        const previous = previousValues.get(String(checklistIndex)) || {};
        const number = part.group
            ? `${part.group === 'ERCP' ? index - 28 : index - 31}`
            : String(checklistIndex);
        const numberCell = document.createElement('td');
        numberCell.textContent = number;
        const nameCell = document.createElement('td');
        const componentKey = String(checklistIndex).padStart(2, '0');
        const componentName = dict[componentKey] || part.name;
        nameCell.textContent = componentName;
        const statusCell = document.createElement('td');
        const status = document.createElement('select');
        status.dataset.reportCheckIndex = String(checklistIndex);
        status.dataset.reportCheckProperty = 'status';
        status.setAttribute('aria-label', `${componentName} ${dict.report_test}`);
        [
            ['', ''],
            ['Pass', dict.report_status_pass],
            ['Fail', dict.report_status_fail]
        ].forEach(([value, label]) => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = label;
            status.appendChild(option);
        });
        if (status.options[0]) status.options[0].textContent = dict.report_status_pending;
        const existingStatus = Object.prototype.hasOwnProperty.call(previous, 'status') ? previous.status : current.status;
        status.value = existingStatus === 'Pass' || existingStatus === 'Ok' ? 'Pass'
            : existingStatus === 'Fail' || existingStatus === 'Failed' ? 'Fail' : '';
        statusCell.appendChild(status);
        const detailsCell = document.createElement('td');
        const details = document.createElement('input');
        details.type = 'text';
        details.value = Object.prototype.hasOwnProperty.call(previous, 'desc')
            ? previous.desc
            : current.desc || current.details || '';
        details.dataset.reportCheckIndex = String(checklistIndex);
        details.dataset.reportCheckProperty = 'desc';
        details.setAttribute('aria-label', `${componentName} ${dict.report_notes}`);
        detailsCell.appendChild(details);
        row.append(numberCell, nameCell, statusCell, detailsCell);
        (index < 18 ? left : right).appendChild(row);
    };
    this.serviceReportChecklistParts.forEach(renderRow);
};


EndoAppStore.fitServiceReportPreviewTextareas = function() {
    const paper = document.getElementById('serviceReportPaper');
    if (!paper) return;
    paper.querySelectorAll('textarea[data-report-field]').forEach(area => {
        const baseRows = Number(area.dataset.baseRows || area.getAttribute('rows') || 1);
        area.dataset.baseRows = String(baseRows);
        const width = area.getBoundingClientRect().width || area.clientWidth || 320;
        const fontSize = window.matchMedia && window.matchMedia('print').matches ? 7 : 8;
        const charsPerLine = Math.max(12, Math.floor(width / (fontSize * 0.55)));
        const lineCount = area.value.split(/\r?\n/).reduce((total, line) =>
            total + Math.max(1, Math.ceil(line.length / charsPerLine)), 0);
        area.rows = Math.max(baseRows, lineCount);
    });
};


EndoAppStore.openServiceReportPreview = function(logId) {
    const log = this.serviceLogs.find(item => String(item.id) === String(logId));
    const modal = document.getElementById('serviceReportPreviewModal');
    const paper = document.getElementById('serviceReportPaper');
    if (!log || !modal || !paper) return;


    const tracking = this.getScopeTracking(log);
    const details = log.reportDetails && typeof log.reportDetails === 'object' ? log.reportDetails : {};
    const timeline = this.getScopeTimeline(log);
    const partsText = (Array.isArray(log.partsConsumed) ? log.partsConsumed : [])
        .map(part => {
            if (typeof part === 'string') return part;
            const name = part.partName || part.name || part.sku || 'Part';
            const quantity = Number(part.quantity) > 0 ? ` × ${part.quantity}` : '';
            const lot = part.lotNumber ? ` · Lot ${part.lotNumber}` : '';
            return `${name}${quantity}${lot}`;
        }).join('\n');
    const dateValue = value => {
        const raw = String(value || '').trim();
        if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
        if (/^\d{4}-\d{2}-\d{2}T/.test(raw)) return raw.slice(0, 10);
        return '';
    };
    const values = {
        scopeType: log.scopeType || '',
        scopeModel: log.scopeModel || tracking.scopeModel || '',
        reportType: details.reportType || tracking.brandScopeType || log.scopeType || '',
        serialNumber: log.serialNumber || tracking.serialNumber || '',
        clientFacility: log.clientFacility || '',
        salesPerson: details.salesPerson || log.salesPerson || '',
        logDate: dateValue(log.logDate),
        location: details.location || log.location || log.clientFacility || '',
        complaintText: log.complaintText || '',
        leakTest: details.leakTest || log.leakTest || '',
        sterilization: details.sterilization || log.sterilization || '',
        sterilizationDate: dateValue(details.sterilizationDate || log.sterilizationDate),
        sterilizationChemical: details.sterilizationChemical || log.sterilizationChemical || '',
        repairDetails: details.repairDetails ?? tracking.notes ?? log.repairNotes ?? '',
        linkedParts: details.linkedParts ?? partsText,
        serviceContract: details.serviceContract || '',
        contractNumber: details.contractNumber || '',
        customerVisits: details.customerVisits || '',
        accessories: details.accessories || '',
        requesterName: details.requesterName || '',
        requesterDepartment: details.requesterDepartment || '',
        repairCategory: tracking.repairCategory || log.repairComplexity || '',
        ect: details.ect || (timeline.isWarranty ? timeline.ect : this.formatScopeDateInput(timeline.dueDate))
    };
    paper.querySelectorAll('[data-report-field]').forEach(control => {
        const value = values[control.dataset.reportField];
        control.value = value == null ? '' : String(value);
    });
    this.fitServiceReportPreviewTextareas();
    this.reportPreviewLogId = log.id;
    this.reportPreviewOriginalEct = values.ect;
    this.renderServiceReportChecklist(log);
    const saveCheckbox = document.getElementById('serviceReportSaveToSheet');
    if (saveCheckbox) saveCheckbox.checked = false;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('service-report-preview-open');
    document.getElementById('serviceReportPreviewClose')?.focus();
};


EndoAppStore.closeServiceReportPreview = function() {
    const modal = document.getElementById('serviceReportPreviewModal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('service-report-preview-open');
    this.reportPreviewLogId = null;
};


EndoAppStore.collectServiceReportPreviewEdits = function(log) {
    const paper = document.getElementById('serviceReportPaper');
    if (!paper) throw new Error('The service report preview is unavailable.');
    const updatedLog = JSON.parse(JSON.stringify(log));
    const details = Object.assign({}, updatedLog.reportDetails || {});
    const tracking = this.getScopeTracking(updatedLog);
    const rootFields = new Set([
        'scopeType', 'scopeModel', 'serialNumber', 'clientFacility', 'logDate', 'complaintText'
    ]);


    paper.querySelectorAll('[data-report-field]').forEach(control => {
        const key = control.dataset.reportField;
        const value = control.value;
        if (rootFields.has(key)) {
            updatedLog[key] = value;
        } else if (key === 'repairCategory') {
            updatedLog.repairComplexity = value;
            tracking.repairCategory = value;
        } else if (key === 'repairDetails') {
            details.repairDetails = value;
            updatedLog.repairNotes = value;
            tracking.notes = value;
        } else if (key === 'reportType') {
            details.reportType = value;
            tracking.brandScopeType = value;
        } else if (key === 'salesPerson' || key === 'location') {
            details[key] = value;
        } else if (key === 'ect') {
            details.ect = value;
        } else if (key === 'linkedParts') {
            details.linkedParts = value;
        } else {
            details[key] = value;
        }
    });


    const reportComponents = Object.assign({}, updatedLog.reportChecklist?.components || {});
    const anatomy = updatedLog.anatomyChecklist && typeof updatedLog.anatomyChecklist === 'object'
        ? updatedLog.anatomyChecklist : {};
    const editedComponents = new Map();
    paper.querySelectorAll('[data-report-check-index]').forEach(control => {
        const index = control.dataset.reportCheckIndex;
        const property = control.dataset.reportCheckProperty;
        const component = editedComponents.get(index) || Object.assign({}, reportComponents[index] || {});
        component[property] = property === 'status'
            ? (control.value === 'Pass' || control.value === 'Fail' ? control.value : 'Pending')
            : control.value;
        editedComponents.set(index, component);
    });
    editedComponents.forEach((component, index) => {
        reportComponents[index] = component;
        const numericIndex = Number(index);
        if (numericIndex <= 33) {
            const key = `comp_${String(numericIndex).padStart(2, '0')}`;
            anatomy[key] = Object.assign({}, anatomy[key] || {}, component);
        }
    });
    updatedLog.anatomyChecklist = anatomy;
    updatedLog.reportChecklist = Object.assign({}, updatedLog.reportChecklist || {}, {
        components: reportComponents
    });
    updatedLog.reportDetails = details;
    updatedLog.scopeTracking = tracking;


    const timeline = this.getScopeTimeline(updatedLog);
    updatedLog.estimatedEndDate = this.formatScopeDateInput(timeline.dueDate);
    tracking.estimatedEndDate = updatedLog.estimatedEndDate;
    if (this.reportPreviewOriginalEct === document.querySelector('[data-report-field="ect"]')?.value) {
        details.ect = timeline.isWarranty ? timeline.ect : updatedLog.estimatedEndDate;
        const ectInput = paper.querySelector('[data-report-field="ect"]');
        if (ectInput) ectInput.value = details.ect || '';
    }
    tracking.scopeModel = updatedLog.scopeModel || tracking.scopeModel;
    tracking.serialNumber = updatedLog.serialNumber || tracking.serialNumber;
    return updatedLog;
};


EndoAppStore.confirmServiceReportPrint = async function() {
    const log = this.serviceLogs.find(item => String(item.id) === String(this.reportPreviewLogId));
    const checkbox = document.getElementById('serviceReportSaveToSheet');
    const printButton = document.getElementById('serviceReportConfirmPrint');
    if (!log) {
        this.showMirrorToast('The scope record for this report could not be found.', true);
        return;
    }
    if (printButton) printButton.disabled = true;
    try {
        if (checkbox?.checked) {
            const updatedLog = this.collectServiceReportPreviewEdits(log);
            const synced = await this.syncRecordToGoogleSheets({ type: 'SCOPE_DATA_UPDATE', data: updatedLog });
            if (!synced) {
                this.showMirrorToast('Could not save report changes to Google Sheets. Printing was stopped; retry or uncheck “Save Changes to Sheet”.', true);
                return;
            }
            const index = this.serviceLogs.findIndex(item => String(item.id) === String(log.id));
            if (index >= 0) this.serviceLogs[index] = updatedLog;
            this.saveState();
            this.renderScopeMirrorDashboard();
            this.renderLogTable();
        }
        window.print();
    } catch (error) {
        console.error('Could not prepare the service report for printing:', error);
        this.showMirrorToast(error.message || 'Could not prepare the service report for printing.', true);
    } finally {
        if (printButton) printButton.disabled = false;
    }
};


EndoAppStore.renderScopeMirrorDashboard = function() {
    const cardGrid = document.getElementById('mirrorCards');
    if (!cardGrid) return;
    const rows = this.getMirrorRows();
    const activeRows = rows.filter(row => row.lifecycle.isActive);
    const readyRows = rows.filter(row => row.lifecycle.isReadyForPickup);
    const warrantyRows = rows.filter(row => row.lifecycle.isWarrantyActive);
    const outOfLabRows = rows.filter(row => row.lifecycle.isCompletedOutOfLab);
    const backupRows = rows.filter(row => row.lifecycle.isBackup);
    const setText = (id, value) => {
        const element = document.getElementById(id);
        if (element) element.textContent = String(value);
    };


    setText('mirrorMetricActive', activeRows.length);
    setText('mirrorMetricReady', readyRows.length);
    setText('mirrorMetricWarranty', warrantyRows.length);
    setText('mirrorMetricOutOfLab', outOfLabRows.length);
    setText('mirrorMetricBackup', backupRows.length);
    setText('mirrorTabActiveCount', activeRows.length);
    setText('mirrorTabCompletedCount', readyRows.length);
    setText('mirrorTabWarrantyCount', warrantyRows.length);
    setText('mirrorTabOutOfLabCount', outOfLabRows.length);
    setText('mirrorTabBackupCount', backupRows.length);
    document.querySelectorAll('[data-mirror-tab]').forEach(button => {
        const selected = button.dataset.mirrorTab === this.mirrorTab;
        button.classList.toggle('is-selected', selected);
        button.setAttribute('aria-selected', String(selected));
    });


    const search = (document.getElementById('mirrorSearchInput')?.value || '').trim().toLowerCase();
    const tabRows = this.mirrorTab === 'completed' ? readyRows
        : this.mirrorTab === 'warranty' ? warrantyRows
            : this.mirrorTab === 'out-of-lab' ? outOfLabRows
                : this.mirrorTab === 'backup' ? backupRows : activeRows;
    const visibleRows = tabRows.filter(({ log, lifecycle }) =>
        JSON.stringify({ ...log, ...lifecycle.tracking }).toLowerCase().includes(search)
    );


    cardGrid.setAttribute('aria-labelledby', this.mirrorTab === 'completed' ? 'mirrorTabCompleted'
        : this.mirrorTab === 'warranty' ? 'mirrorTabWarranty'
            : this.mirrorTab === 'out-of-lab' ? 'mirrorTabOutOfLab'
                : this.mirrorTab === 'backup' ? 'mirrorTabBackup' : 'mirrorTabActive');
    cardGrid.replaceChildren();
    if (visibleRows.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'mirror-empty-state';
        empty.textContent = search
            ? 'No scopes match your search in this view.'
            : this.mirrorTab === 'completed' ? 'No scopes are ready for pickup.'
                : this.mirrorTab === 'warranty' ? 'No scopes are currently in their 90-day warranty period.'
                    : this.mirrorTab === 'out-of-lab' ? 'No completed scopes are currently marked out of lab.'
                        : this.mirrorTab === 'backup' ? 'No backup scopes are currently tracked.'
                            : 'No active repairs are currently being tracked.';
        cardGrid.appendChild(empty);
        return;
    }


    visibleRows.forEach(({ log, lifecycle }) => {
        const tracking = lifecycle.tracking;
        const card = document.createElement('article');
        card.className = `mirror-scope-card mirror-row-${lifecycle.warning}`;
        card.dataset.logId = log.id;
        const category = tracking.repairCategory || 'Unclassified';
        const stageClass = tracking.repairStage.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const warningLabel = lifecycle.warning === 'critical' ? 'CRITICAL PRIORITY - COMPLETE ASAP'
            : lifecycle.warning === 'overdue' ? `Overdue by ${Math.abs(lifecycle.daysRemaining)} day${Math.abs(lifecycle.daysRemaining) === 1 ? '' : 's'}`
                : lifecycle.warning === 'warning' ? `${lifecycle.daysRemaining} day${lifecycle.daysRemaining === 1 ? '' : 's'} remaining`
                    : lifecycle.daysRemaining === null ? 'SLA not started' : 'On track';
        const ectLabel = lifecycle.isWarrantyActive
            ? `${lifecycle.warrantyRemaining} days of 90-day warranty remain`
            : lifecycle.timeline.isWarranty ? 'Complete ASAP'
                : lifecycle.daysRemaining === null ? 'Set start date'
                    : lifecycle.daysRemaining < 0 ? `${Math.abs(lifecycle.daysRemaining)} days overdue`
                        : `${lifecycle.daysRemaining} days remaining`;
        const header = document.createElement('header');
        header.className = 'mirror-card-header';
        const identification = document.createElement('div');
        const model = document.createElement('h4');
        model.textContent = tracking.scopeModel || log.scopeModel || 'Unspecified scope';
        const serial = document.createElement('p');
        serial.className = 'mirror-card-serial';
        serial.textContent = `S/N ${tracking.serialNumber || log.serialNumber || '—'}`;
        identification.append(model, serial);
        const warning = document.createElement('span');
        warning.className = `mirror-warning-pill warning-${lifecycle.warning}`;
        warning.textContent = warningLabel;
        header.append(identification, warning);
        card.appendChild(header);


        const tags = document.createElement('div');
        tags.className = 'mirror-card-tags';
        const categoryTag = document.createElement('span');
        categoryTag.className = 'mirror-category-pill';
        categoryTag.textContent = category;
        const brandTag = document.createElement('span');
        brandTag.className = 'mirror-brand-tag';
        brandTag.textContent = tracking.brandScopeType || log.scopeType || 'Brand not set';
        tags.append(categoryTag, brandTag);
        card.appendChild(tags);


        const controls = document.createElement('div');
        controls.className = 'mirror-card-controls';
        const stageLabel = document.createElement('label');
        stageLabel.className = 'mirror-inline-field';
        const stageCaption = document.createElement('span');
        stageCaption.textContent = this.getUiText('mirror_card_repair_stage');
        const stageSelect = document.createElement('select');
        stageSelect.className = `mirror-stage-select stage-${stageClass}`;
        stageSelect.dataset.mirrorInlineField = 'repairStage';
        stageSelect.dataset.logId = log.id;
        stageSelect.setAttribute('aria-label', this.getUiText('mirror_stage_for')
            .replace('{serial}', tracking.serialNumber || log.id));
        this.mirrorStages.forEach(stage => {
            const option = document.createElement('option');
            option.value = stage;
            option.className = `stage-${stage.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
            option.textContent = stage;
            option.disabled = stage === 'In Warranty Period' && !tracking.isOutOfLab && tracking.repairStage !== stage;
            stageSelect.appendChild(option);
        });
        stageSelect.value = tracking.repairStage;
        stageLabel.append(stageCaption, stageSelect);
        controls.appendChild(stageLabel);
        card.appendChild(controls);

        const progressSection = document.createElement('section');
        progressSection.className = 'mirror-progress-section';
        const progressLabel = document.createElement('div');
        progressLabel.className = 'mirror-progress-topline';
        const progressHeading = document.createElement('span');
        progressHeading.className = 'mirror-progress-heading';
        progressHeading.textContent = lifecycle.timeline.isWarranty
            ? this.getUiText('mirror_card_priority')
            : `${this.getUiText('mirror_card_progress')} · ${lifecycle.progress.toFixed(0)}%`;
        const progressRemaining = document.createElement('span');
        progressRemaining.className = 'mirror-progress-remaining';
        progressRemaining.textContent = ectLabel;
        progressLabel.append(progressHeading, progressRemaining);
        const progressTrack = document.createElement('div');
        progressTrack.className = 'mirror-progress-track';
        progressTrack.setAttribute('role', 'progressbar');
        progressTrack.setAttribute('aria-valuemin', '0');
        progressTrack.setAttribute('aria-valuemax', '100');
        progressTrack.setAttribute('aria-valuenow', lifecycle.progress.toFixed(0));
        progressTrack.setAttribute('aria-label', this.getUiText('mirror_card_progress_aria'));
        const progressFill = document.createElement('span');
        progressFill.style.width = `${lifecycle.progress.toFixed(0)}%`;
        progressTrack.appendChild(progressFill);
        progressSection.append(progressLabel, progressTrack);
        card.appendChild(progressSection);


        const extraDetails = document.createElement('details');
        extraDetails.className = 'mirror-card-extra';
        const extraSummary = document.createElement('summary');
        extraSummary.textContent = this.getUiText('mirror_card_details');
        const details = document.createElement('dl');
        details.className = 'mirror-card-details';
        [
            [this.getUiText('mirror_card_owner'), tracking.owner || log.technicianName || '—'],
            [this.getUiText('mirror_card_start_date'), this.formatMirrorDate(tracking.startDate)],
            [this.getUiText('mirror_card_estimated_end_date'), lifecycle.timeline.isWarranty ? this.getUiText('mirror_card_priority') : this.formatMirrorDate(lifecycle.dueDate)],
            [this.getUiText('mirror_card_time_remaining'), ectLabel],
            [this.getUiText('mirror_card_reference'), tracking.refOther || '—']
        ].forEach(([label, value]) => {
            const item = document.createElement('div');
            const term = document.createElement('dt');
            term.textContent = label;
            const description = document.createElement('dd');
            description.textContent = value;
            item.append(term, description);
            details.appendChild(item);
        });
        extraDetails.append(extraSummary, details);
        if (tracking.notes) {
            const notes = document.createElement('p');
            notes.className = 'mirror-card-notes';
            const noteHeading = document.createElement('strong');
            noteHeading.textContent = `${this.getUiText('mirror_card_latest_note')}: `;
            notes.appendChild(noteHeading);
            notes.appendChild(document.createTextNode(tracking.notes));
            extraDetails.appendChild(notes);
        }
        const noteActions = document.createElement('div');
        noteActions.className = 'mirror-card-note-actions';
        const addNoteButton = document.createElement('button');
        addNoteButton.type = 'button';
        addNoteButton.className = 'mirror-icon-button mirror-add-note-button';
        addNoteButton.dataset.mirrorAddNote = log.id;
        addNoteButton.setAttribute('aria-label', this.getUiText('mirror_card_add_note'));
        addNoteButton.title = this.getUiText('mirror_card_add_note');
        addNoteButton.setAttribute('aria-expanded', 'false');
        addNoteButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/></svg>';
        const noteForm = document.createElement('form');
        noteForm.className = 'mirror-quick-note-form';
        noteForm.dataset.mirrorQuickNoteForm = log.id;
        noteForm.hidden = true;
        const noteLabel = document.createElement('label');
        noteLabel.className = 'form-control-group';
        const noteLabelText = document.createElement('span');
        noteLabelText.textContent = this.getUiText('mirror_card_latest_note');
        const noteInput = document.createElement('textarea');
        noteInput.className = 'form-textarea-element';
        noteInput.name = 'note';
        noteInput.rows = 3;
        noteInput.maxLength = 2000;
        noteInput.required = true;
        noteInput.placeholder = this.getUiText('mirror_card_note_placeholder');
        noteLabel.append(noteLabelText, noteInput);
        const noteFormActions = document.createElement('div');
        noteFormActions.className = 'mirror-quick-note-actions';
        const cancelNoteButton = document.createElement('button');
        cancelNoteButton.type = 'button';
        cancelNoteButton.className = 'btn btn-interactive-outline';
        cancelNoteButton.dataset.mirrorCancelNote = log.id;
        cancelNoteButton.textContent = this.getUiText('mirror_card_cancel');
        const saveNoteButton = document.createElement('button');
        saveNoteButton.type = 'submit';
        saveNoteButton.className = 'btn btn-interactive-primary';
        saveNoteButton.textContent = this.getUiText('mirror_card_save_note');
        noteFormActions.append(cancelNoteButton, saveNoteButton);
        noteForm.append(noteLabel, noteFormActions);
        noteActions.append(addNoteButton, noteForm);
        const printReportButton = document.createElement('button');
        printReportButton.type = 'button';
        printReportButton.className = 'mirror-icon-button mirror-print-report-button';
        printReportButton.dataset.mirrorPrintReport = log.id;
        printReportButton.setAttribute('aria-label', this.getUiText('mirror_card_print_report'));
        printReportButton.title = this.getUiText('mirror_card_print_report');
        printReportButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/></svg>';
        noteActions.insertBefore(printReportButton, noteForm);
        const utilityRow = document.createElement('div');
        utilityRow.className = 'mirror-card-utility-row';
        utilityRow.append(extraDetails, noteActions);
        card.appendChild(utilityRow);


        if (lifecycle.isCompleted) {
            const pickupButton = document.createElement('button');
            pickupButton.type = 'button';
            pickupButton.className = 'btn btn-interactive-primary mirror-pickup-button';
            pickupButton.dataset.mirrorPickup = log.id;
            pickupButton.textContent = 'Mark Out of Lab / Picked Up';
            card.appendChild(pickupButton);
        }
        card.setAttribute('role', 'group');
        card.tabIndex = 0;
        card.setAttribute('aria-label', this.getUiText('mirror_scope_history_label')
            .replace('{model}', tracking.scopeModel || log.scopeModel || this.getUiText('scope_generic'))
            .replace('{serial}', tracking.serialNumber || log.serialNumber || this.getUiText('scope_unknown')));
        cardGrid.appendChild(card);
    });
};


EndoAppStore.updateMirrorInlineField = async function(logId, key, value) {
    const log = this.serviceLogs.find(item => String(item.id) === String(logId));
    if (!log || key !== 'repairStage') return;
    const tracking = this.getScopeTracking(log);
    if (key === 'repairStage' && !this.mirrorStages.includes(value)) return;
    tracking.repairStage = value;
    if (value === 'In Warranty Period' && !tracking.isOutOfLab) return;
    log.scopeTracking = tracking;
    this.saveState();
    this.renderScopeMirrorDashboard();
    const synced = await this.syncRecordToGoogleSheets({ type: 'SCOPE_DATA_UPDATE', data: log });
    this.showMirrorToast(
        synced ? '✓ Status Updated & Cloud Synced!' : 'Saved on this device. Cloud sync failed.',
        !synced
    );
};


EndoAppStore.addScopeNote = async function(logId, noteText) {
    const log = this.serviceLogs.find(item => String(item.id) === String(logId));
    const note = String(noteText || '').trim();
    if (!log) throw new Error('Scope record could not be found.');
    if (!note) throw new Error('Enter a note before saving.');
    if (note.length > 2000) throw new Error('Notes must be 2,000 characters or fewer.');


    const tracking = this.getScopeTracking(log);
    const timestamp = new Date();
    const author = this.currentUserRole === 'admin' ? 'Admin' : 'Tech';
    const entry = `[${timestamp.toLocaleString()} · ${author}] ${note}`;
    tracking.notes = tracking.notes ? `${tracking.notes}\n${entry}` : entry;
    log.scopeTracking = tracking;
    log.repairNotes = tracking.notes;
    this.saveState();
    this.renderScopeMirrorDashboard();
    const synced = await this.syncRecordToGoogleSheets({ type: 'SCOPE_DATA_UPDATE', data: log });
    this.showMirrorToast(
        synced ? 'Scope note added and synced.' : 'Scope note saved on this device; cloud sync failed.',
        !synced
    );
    return synced;
};


EndoAppStore.openScopeHistoryFromMirror = function(log) {
    if (!log) return;
    const serial = String(log.serialNumber || log.scopeTracking?.serialNumber || '').trim();
    const query = document.getElementById('timelineQueryInput');
    if (query) query.value = serial;
    this.activeHistorySerial = serial;
    const timelineLink = document.getElementById('navLinkTimeline');
    if (timelineLink) timelineLink.click();
    this.generateTimelineStream(serial);
};


EndoAppStore.formatMirrorDate = function(value) {
    if (!value) return '—';
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? String(value) : new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(date);
};


EndoAppStore.markScopeOutOfLab = async function(logId) {
    const log = this.serviceLogs.find(item => String(item.id) === String(logId));
    if (!log) return;
    const tracking = this.getScopeTracking(log);
    if (tracking.repairStage !== 'Ready' || tracking.isOutOfLab) return;
    const pickedUpAt = new Date();
    tracking.isOutOfLab = true;
    tracking.endDate = pickedUpAt.toISOString();
    tracking.repairStage = 'In Warranty Period';
    tracking.warrantyUntil = new Date(pickedUpAt.getTime() + 90 * 24 * 60 * 60 * 1000).toISOString();
    tracking.progress = 100;
    log.scopeTracking = tracking;
    log.scopeStatusState = 'Dispatched / Completed';
    this.saveState();
    const synced = await this.syncRecordToGoogleSheets({ type: 'SCOPE_DATA_UPDATE', data: log });
    this.renderScopeMirrorDashboard();
    this.showMirrorToast(
        synced ? '✓ Pickup recorded & Cloud Synced!' : 'Pickup saved on this device. Cloud sync failed.',
        !synced
    );
};


EndoAppStore.refreshScopeMirrorFromSheets = async function() {
    const status = document.getElementById('mirrorSyncStatus');
    try {
        const response = await fetch(this.googleWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ type: 'GET_SCOPE_MIRROR', authToken: this.currentAuthToken })
        });
        if (!response.ok) throw new Error(`Apps Script returned ${response.status}.`);
        const result = await response.json();
        if (result.status !== 'SUCCESS' || !Array.isArray(result.data)) {
            throw new Error(result.message || 'The scope mirror response was invalid.');
        }


        result.data.forEach(remote => {
            if (!remote.id || !remote.scopeTracking) return;
            const existing = this.serviceLogs.find(log => String(log.id) === String(remote.id));
            if (existing) existing.scopeTracking = remote.scopeTracking;
            else this.serviceLogs.push({
                id: remote.id,
                scopeModel: remote.scopeTracking.scopeModel || '',
                serialNumber: remote.scopeTracking.serialNumber || '',
                logDate: remote.scopeTracking.startDate || '',
                repairNotes: remote.scopeTracking.notes || '',
                technicianName: remote.scopeTracking.owner || '',
                scopeTracking: remote.scopeTracking
            });
        });
        this.saveState();
        this.renderScopeMirrorDashboard();
        if (status) status.textContent = `Synced with Google Sheet · ${new Date().toLocaleTimeString()}`;
    } catch (error) {
        console.error('Scope mirror refresh failed:', error);
        if (status) status.textContent = `Could not refresh from Google Sheet: ${error.message}`;
    }
};


EndoAppStore.executePredictivePatternAnalysis = function() {
    const deck = document.getElementById('predictiveAnalyticsAlertsDeck');
    if (!deck) return;
    deck.innerHTML = '';


    const dict = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;


    // Group logs by serial number to detect recurring component breakdowns
    const scopeFailures = {};


    this.serviceLogs.forEach(log => {
        if (log.inspectionStatus === 'Fail' || log.anatomyChecklist) {
            const sn = log.serialNumber;
            if (!scopeFailures[sn]) scopeFailures[sn] = { model: log.scopeModel, count: 0, failedComps: {} };
            scopeFailures[sn].count++;


            if (log.anatomyChecklist) {
                Object.entries(log.anatomyChecklist).forEach(([key, val]) => {
                    if (val && val.status === 'Fail') {
                        const compIdx = key.replace('comp_', '');
                        scopeFailures[sn].failedComps[compIdx] = (scopeFailures[sn].failedComps[compIdx] || 0) + 1;
                    }
                });
            }
        }
    });


    // Project predictive banners for scopes with high recurrence
    Object.entries(scopeFailures).forEach(([sn, data]) => {
        const repeatComps = Object.entries(data.failedComps).filter(([_, count]) => count >= 1);
        if (data.count >= 2 || repeatComps.length >= 2) {
            const banner = document.createElement('div');
            banner.className = 'alert-banner alert-predictive-fail';


            const compNames = repeatComps.map(([idx]) => this.lookupAnatomyComponentName(idx)).join(', ') || 'Multiple inspection points';


            banner.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
                    <span>🔬 <strong>${dict.alert_predictive}</strong> High-risk recurrence on <strong>${data.model}</strong> (<code>${sn}</code>). Recurring stress on: <em>${compNames}</em>.</span>
                    <span class="predictive-metric-badge">PREDICTIVE OVERHAUL RECOMMENDED</span>
                </div>
            `;
            deck.appendChild(banner);
        }
    });
};


/* ==========================================================================
   5. METRICS CARDS & REAL-TIME SUMMARY COUNTERS
   ========================================================================== */
EndoAppStore.updateMetrics = function() {
    const valTotal = document.getElementById('valTotalScopes');
    const valPending = document.getElementById('valPendingRepairs');
    const valActive = document.getElementById('valActiveLogs');


    if (valTotal) valTotal.innerText = this.serviceLogs.length;
    if (valPending) valPending.innerText = this.getOverdueScopeLogs().length;


    if (valActive) {
        const activeCount = this.serviceLogs.filter(log => this.isActiveScopeLog(log)).length;
        valActive.innerText = activeCount;
    }
};


/* ==========================================================================
   6. ROLE-BASED ACCESS CONTROL & PRIVILEGES
   ========================================================================== */
EndoAppStore.applyRolePrivilegeLockdowns = function(role) {
    const privateSidebarLink = document.getElementById('navLinkAdminLogs');
    const privateView = document.getElementById('adminNotebookView');
    const procurementPanel = document.getElementById('adminProcurementPanel');
    if (privateSidebarLink) privateSidebarLink.style.display = role === 'admin' ? 'flex' : 'none';
    if (procurementPanel) procurementPanel.hidden = role !== 'admin';
    if (role === 'tech') {
        if (privateView) privateView.style.display = 'none';
        const privateNotesBody = document.getElementById('adminPrivateNotesTableBody');
        const scratchpad = document.getElementById('terminalScratchpadArea');
        const todoList = document.getElementById('terminalTodoListContainer');
        if (privateNotesBody) privateNotesBody.replaceChildren();
        if (scratchpad) scratchpad.value = '';
        if (todoList) todoList.replaceChildren();
    }
    document.body.dataset.userRole = role;
    this.currentUserRole = role;
    this.adminAuthenticated = role === 'admin';
    this.evaluateAdminSessionStateDisplay();
};


/* ==========================================================================
   7. NAVIGATION ROUTING & MOBILE DRAWER ENGINE
   ========================================================================== */
EndoAppStore.bindGlobalNavigation = function() {
    const navDashboard = document.getElementById('navLinkDashboard');
    const navMirror = document.getElementById('navLinkMirrorDashboard');
    const navParts = document.getElementById('navLinkParts');
    const navTimeline = document.getElementById('navLinkTimeline');
    const navInventory = document.getElementById('navLinkInventory');
    const navAdminLogs = document.getElementById('navLinkAdminLogs');


    const viewDashboard = document.getElementById('dashboardView');
    const viewMirror = document.getElementById('scopeMirrorDashboardView');
    const viewParts = document.getElementById('partsProcurementView');
    const viewTimeline = document.getElementById('scopeTimelineView');
    const viewInventory = document.getElementById('warehouseInventoryView');
    const viewAdminLogs = document.getElementById('adminNotebookView');


    const viewTitle = document.getElementById('viewTitleHeading');
    const viewSub = document.getElementById('viewSubHeading');


    const mobileButton = document.getElementById('mobileNavbarMenuToggle');
    const desktopButton = document.getElementById('desktopNavbarMenuToggle');
    const brandHomeButton = document.getElementById('brandHomeButton');
    const navigationToggleText = document.getElementById('sidebarToggleText');
    const navLinksGroup = document.getElementById('sidebarNavLinksGroup');
    const appContainer = document.getElementById('appRoot');
    const timelineBackButton = document.getElementById('timelineBackToDashboard');


    // Theme initialization
    this.applyTheme(localStorage.getItem('endolog_pro_active_theme'));


    const resetAllActiveViewPanels = () => {
        [viewDashboard, viewMirror, viewParts, viewTimeline, viewInventory, viewAdminLogs].forEach(panel => {
            if (panel) panel.style.display = 'none';
        });
        [navDashboard, navMirror, navParts, navTimeline, navInventory, navAdminLogs].forEach(link => {
            if (link) {
                link.classList.remove('active-link');
                link.removeAttribute('aria-current');
            }
        });
        if (window.innerWidth < 1024 && navLinksGroup) {
            navLinksGroup.classList.remove('drawer-open');
            syncNavigationToggle();
        }
    };


    const syncNavigationToggle = () => {
        if (!navLinksGroup || !appContainer) return;
        if (window.innerWidth >= 1024) {
            navLinksGroup.classList.remove('drawer-open');
            const collapsed = localStorage.getItem('endolog_pro_sidebar_collapsed') === 'true';
            appContainer.classList.toggle('sidebar-collapsed', collapsed);
            const label = this.getUiText(collapsed ? 'nav_expand' : 'nav_collapse');
            if (navigationToggleText) navigationToggleText.textContent = label;
            if (desktopButton) {
                desktopButton.setAttribute('aria-expanded', String(!collapsed));
                desktopButton.setAttribute('aria-label', label);
                desktopButton.title = label;
            }
            navLinksGroup.querySelectorAll('.menu-link').forEach(link => {
                link.title = collapsed ? link.querySelector('.menu-text')?.textContent.trim() || '' : '';
            });
            return;
        }
        appContainer.classList.remove('sidebar-collapsed');
        navLinksGroup.querySelectorAll('.menu-link').forEach(link => { link.title = ''; });
        const open = navLinksGroup.classList.contains('drawer-open');
        const label = this.getUiText(open ? 'nav_close_menu' : 'nav_open_menu');
        if (mobileButton) {
            mobileButton.setAttribute('aria-expanded', String(open));
            mobileButton.setAttribute('aria-label', label);
            mobileButton.title = label;
        }
    };

    if (mobileButton && navLinksGroup) {
        syncNavigationToggle();
        mobileButton.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinksGroup.classList.toggle('drawer-open');
            syncNavigationToggle();
        });
    }
    if (desktopButton && appContainer) {
        desktopButton.addEventListener('click', event => {
            event.stopPropagation();
            const collapsed = appContainer.classList.toggle('sidebar-collapsed');
            localStorage.setItem('endolog_pro_sidebar_collapsed', String(collapsed));
            syncNavigationToggle();
        });
    }
    if (brandHomeButton) {
        brandHomeButton.addEventListener('click', () => {
            sessionStorage.removeItem(this.roleSessionKey);
            sessionStorage.removeItem(this.authTokenSessionKey);
            this.currentUserRole = null;
            this.currentAuthToken = null;
            this.adminAuthenticated = false;
            this.currentActiveView = null;
            appContainer.hidden = true;
            const authGate = document.getElementById('authGate');
            if (authGate) authGate.hidden = false;
            const form = document.getElementById('authGateForm');
            if (form) form.reset();
            const message = document.getElementById('authGateMessage');
            if (message) message.textContent = '';
            const submitButton = document.getElementById('authSubmitButton');
            if (submitButton) submitButton.disabled = false;
            this.bindAuthenticationForm();
            document.getElementById('authPasscodeInput')?.focus();
        });
    }
    window.addEventListener('resize', syncNavigationToggle);


    // A. Service Dashboard
    if (navDashboard) {
        navDashboard.addEventListener('click', (e) => {
            e.preventDefault();
            this.currentActiveView = 'dashboard';
            resetAllActiveViewPanels();
            navDashboard.classList.add('active-link');
            navDashboard.setAttribute('aria-current', 'page');
            if (viewDashboard) viewDashboard.style.display = 'flex';
            this.updateHeaderTitles();
            this.renderLogTable();
        });
    }


    if (navMirror) {
        navMirror.addEventListener('click', event => {
            event.preventDefault();
            this.currentActiveView = 'mirror';
            resetAllActiveViewPanels();
            navMirror.classList.add('active-link');
            navMirror.setAttribute('aria-current', 'page');
            if (viewMirror) viewMirror.style.display = 'flex';
            this.updateHeaderTitles();
            this.renderScopeMirrorDashboard();
            this.refreshScopeMirrorFromSheets();
        });
    }


    // B. Parts Procurement
    if (navParts) {
        navParts.addEventListener('click', (e) => {
            e.preventDefault();
            this.currentActiveView = 'parts';
            resetAllActiveViewPanels();
            navParts.classList.add('active-link');
            navParts.setAttribute('aria-current', 'page');
            if (viewParts) viewParts.style.display = 'flex';
            this.updateHeaderTitles();
            this.renderPartsTable();
            this.populateScopeSelector();
            this.refreshPartsProcurementData();
        });
    }


    // C. Scope History Timeline
    if (navTimeline) {
        navTimeline.addEventListener('click', (e) => {
            e.preventDefault();
            this.currentActiveView = 'timeline';
            resetAllActiveViewPanels();
            navTimeline.classList.add('active-link');
            navTimeline.setAttribute('aria-current', 'page');
            if (viewTimeline) viewTimeline.style.display = 'block';
            this.updateHeaderTitles();
            // Automatically run initial timeline preview if query input has text or first scope
            const queryInput = document.getElementById('timelineQueryInput');
            if (queryInput && queryInput.value.trim()) {
                this.generateTimelineStream(queryInput.value.trim());
            } else if (this.serviceLogs.length > 0) {
                this.generateTimelineStream(this.serviceLogs[0].serialNumber);
            }
        });
    }


    // D. Warehouse Inventory Ledger
    if (navInventory) {
        navInventory.addEventListener('click', (e) => {
            e.preventDefault();
            this.currentActiveView = 'inventory';
            resetAllActiveViewPanels();
            navInventory.classList.add('active-link');
            navInventory.setAttribute('aria-current', 'page');
            if (viewInventory) viewInventory.style.display = 'block';
            this.updateHeaderTitles();
            this.renderInventoryTable();
            this.refreshPartsProcurementData();
        });
    }


    // E. Private Admin Notebook
    if (navAdminLogs) {
        navAdminLogs.addEventListener('click', (e) => {
            e.preventDefault();
            this.currentActiveView = 'admin';
            resetAllActiveViewPanels();
            navAdminLogs.classList.add('active-link');
            navAdminLogs.setAttribute('aria-current', 'page');
            if (viewAdminLogs) viewAdminLogs.style.display = 'block';
            this.updateHeaderTitles();
            this.evaluateAdminSessionStateDisplay();
        });
    }


    // Global Theme Toggle
    const navThemeToggle = document.getElementById('navLinkThemeToggle');
    if (navThemeToggle) {
        navThemeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            this.applyTheme(document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        });
    }


    if (timelineBackButton && navMirror) {
        timelineBackButton.addEventListener('click', () => navMirror.click());
    }
};


EndoAppStore.openDashboardLogFilter = function(filterValue) {
    const dashboardLink = document.getElementById('navLinkDashboard');
    const searchInput = document.getElementById('tableSearchInput');
    const statusFilter = document.getElementById('tableStatusFilter');
    const table = document.getElementById('masterLogDataTable');


    if (this.currentActiveView !== 'dashboard' && dashboardLink) dashboardLink.click();
    this.currentActiveView = 'dashboard';
    if (searchInput) searchInput.value = '';
    if (statusFilter) statusFilter.value = filterValue;
    this.renderLogTable();
    if (table) table.scrollIntoView({ behavior: 'smooth', block: 'start' });
};


EndoAppStore.updateHeaderTitles = function() {
    const viewTitle = document.getElementById('viewTitleHeading');
    const viewSub = document.getElementById('viewSubHeading');
    if (!viewTitle || !viewSub) return;


    const dict = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;


    switch (this.currentActiveView) {
        case 'mirror':
            viewTitle.innerText = dict.view_title_mirror;
            viewSub.innerText = this.activeLanguage === 'id'
                ? 'Status perbaikan, kesiapan pengambilan, dan garansi dalam satu tampilan.'
                : 'Repair progress, pickup readiness, and warranty status in one live view.';
break;
        case 'parts':
            viewTitle.innerText = dict.view_title_parts;
            viewSub.innerText = dict.view_sub_parts;
            break;
        case 'timeline':
            viewTitle.innerText = dict.view_title_timeline;
            viewSub.innerText = dict.view_sub_timeline;
            break;
        case 'inventory':
            viewTitle.innerText = dict.view_title_inventory;
            viewSub.innerText = dict.view_sub_inventory;
            break;
        case 'admin':
            viewTitle.innerText = dict.view_title_admin;
            viewSub.innerText = dict.view_sub_admin;
            break;
        case 'dashboard':
        default:
            viewTitle.innerText = 'Scope Entry & Service Records';
            viewSub.innerText = 'Create service reports and review scope records';
            break;
    }
};


/* ==========================================================================
   8. UNIFIED FORM SUBMISSIONS & TRANSACTION RECORDERS
   ========================================================================== */
EndoAppStore.bindFormSubmissions = function() {
    const serviceForm = document.getElementById('serviceReportForm');
    const quickForm = document.getElementById('dashboardQuickCommentForm');
    const procurementForm = document.getElementById('partsProcurementForm');
    const invForm = document.getElementById('inventoryIntakeRegistrationForm');
    const privateNoteForm = document.getElementById('adminPrivateNoteForm');


    // ----------------------------------------------------------------------
    // Form 1: Master 33-Point Service Verification Report
    // ----------------------------------------------------------------------
    if (serviceForm) {
        serviceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = serviceForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn ? submitBtn.innerText : "Commit Service Log";
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = this.activeLanguage === 'id' ? "Memproses..." : "Processing...";
            }


            try {
                const formData = new FormData(serviceForm);
                const targetedSerial = (formData.get('serialNumber') || "").trim();


                if (!targetedSerial) {
                    alert("Error: Serial Number (S/N) cannot be empty.");
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerText = originalBtnText;
                    }
                    return;
                }


                const logEntry = {
                    id: 'LOG-' + Date.now(),
                    timestamp: new Date().toLocaleString(),
                    scopeModel: formData.get('scopeModel') || "",
                    scopeType: formData.get('scopeType') || "",
                    serialNumber: targetedSerial,
                    clientFacility: formData.get('clientFacility') || "",
                    technicianName: formData.get('technicianName') || "",
                    logDate: formData.get('logDate') || new Date().toISOString().split('T')[0],
                    scopeStatusState: formData.get('scopeStatusState') || "Incoming (Pending Report)",
                    warrantyStatus: formData.get('warrantyStatus') || "No Warranty",
                    repairComplexity: formData.get('repairComplexity') || "Minor",
                    downPaymentDate: formData.get('downPaymentDate') || null,
                    inspectionStatus: formData.get('inspectionStatus') || "Pending",
                    complaintText: formData.get('complaintTextField') || "",
                    mediaUrl: formData.get('formMediaCloudUrl') || "",
                    repairNotes: formData.get('formRepairNotes') || "",
                    requestedPartName: (formData.get('formPartRequestField') || "").trim(),
                    anatomyChecklist: {}
                };
                logEntry.scopeTracking = this.createDefaultScopeTracking(logEntry);
                logEntry.estimatedEndDate = this.formatScopeDateInput(
                    this.getScopeTimeline(logEntry).dueDate
                );
                logEntry.scopeTracking.estimatedEndDate = logEntry.estimatedEndDate;


                // Compile 33 Anatomy Component Matrix
                for (let i = 1; i <= 33; i++) {
                    const idx = i.toString().padStart(2, '0');
                    logEntry.anatomyChecklist[`comp_${idx}`] = {
                        status: formData.get(`anatomy_status_${idx}`) || 'Pass',
                        desc: formData.get(`anatomy_desc_${idx}`) || ''
                    };
                }


                // If a spare part was requested, automatically queue an order in parts procurement
                if (logEntry.requestedPartName) {
                    const autoTicket = {
                        id: 'PRT-' + Date.now(),
                        bindingType: 'scope',
                        serialNumber: targetedSerial,
                        partName: logEntry.requestedPartName,
                        supplier: 'OEM Direct Distribution',
                        cost: '0.00',
                        partEta: 'Pending Verification',
                        status: 'Awaiting Approval'
                    };
                    this.partsOrders.unshift(autoTicket);
                    this.syncRecordToGoogleSheets({ type: 'PARTS_DEMAND_BACKUP', data: autoTicket });
                }


                this.serviceLogs.unshift(logEntry);
                this.saveState();


                // Dispatch to Google Sheets
                this.syncRecordToGoogleSheets({
                    type: 'FULL_SERVICE_REPORT',
                    data: logEntry
                });


                this.renderAll();
                serviceForm.reset();


                const dict = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;
                alert(dict.msg_saved_synced);
            } catch (err) {
                console.error("Failed committing service report:", err);
                alert("Error saving record: " + err.message);
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    const dict = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;
                    submitBtn.innerText = dict.btn_submit_log;
                }
            }
        });
    }


    // ----------------------------------------------------------------------
    // Form 2: Quick Lab Update & Relational Stock Decrement Interceptor
    // ----------------------------------------------------------------------
    if (quickForm) {
        quickForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = quickForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = "...";
            }


            try {
                const serialSelect = document.getElementById('quickLinkScopeSerial');
                const noteInput = document.getElementById('quickLinkCommentText');
                const partInput = document.getElementById('quickLinkPartRequest');


                const selectedSerial = serialSelect ? serialSelect.value : "";
                const typedNote = noteInput ? noteInput.value.trim() : "";
                const requestedPart = partInput ? partInput.value.trim() : "";


                if (!selectedSerial) {
                    alert("Please select a valid Scope Serial Number.");
                    if (submitBtn) { submitBtn.disabled = false; submitBtn.innerText = "Push Progress Update"; }
                    return;
                }


                const targetLog = this.serviceLogs.find(log => log.serialNumber === selectedSerial);
                if (!targetLog) {
                    alert("Selected scope serial not found in active records.");
                    if (submitBtn) { submitBtn.disabled = false; submitBtn.innerText = "Push Progress Update"; }
                    return;
                }


                const updatedLog = JSON.parse(JSON.stringify(targetLog));
                const nowStamp = new Date().toLocaleString();
                const newNoteLine = `[${nowStamp}] ${typedNote}`;
                updatedLog.repairNotes = newNoteLine + (updatedLog.repairNotes ? "\n" + updatedLog.repairNotes : "");
                if (requestedPart) updatedLog.requestedPartName = requestedPart;

                const scopeSynced = await this.syncRecordToGoogleSheets({
                    type: 'SCOPE_DATA_UPDATE',
                    data: updatedLog
                });
                if (!scopeSynced) {
                    throw new Error(this.activeLanguage === 'id'
                        ? 'Pembaruan progres gagal disinkronkan; tidak ada perubahan lokal yang diterapkan.'
                        : 'Progress update could not be synced; no local changes were applied.');
                }

                const targetIndex = this.serviceLogs.findIndex(log => String(log.id) === String(updatedLog.id));
                if (targetIndex < 0) throw new Error('The selected scope record is no longer available.');
                this.serviceLogs[targetIndex] = updatedLog;
                this.saveState();

                let matchedAsset = null;
                if (requestedPart) {
                    matchedAsset = this.inventoryPool.find(item =>
                        item.sku.toLowerCase() === requestedPart.toLowerCase() ||
                        item.partName.toLowerCase().includes(requestedPart.toLowerCase()) ||
                        requestedPart.toLowerCase().includes(item.sku.toLowerCase())
                    );

                    if (matchedAsset && Number(matchedAsset.currentStock) > 0) {
                        await this.consumeInventoryForScope(updatedLog.id, requestedPart);
                    }

                    const connectedPartTicket = {
                        id: `PRT-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                        bindingType: 'scope',
                        recordId: updatedLog.id,
                        sourceLogId: updatedLog.id,
                        serialNumber: selectedSerial,
                        scopeModel: updatedLog.scopeModel || '',
                        partName: requestedPart,
                        quantity: 1,
                        estimatedPrice: '',
                        cost: '145.00',
                        supplier: matchedAsset ? matchedAsset.vendor : 'OEM Distribution Center',
                        preferredVendor: matchedAsset ? matchedAsset.vendor : '',
                        requestedAt: new Date().toISOString(),
                        status: 'Awaiting Approval'
                    };
                    this.partsOrders.unshift(connectedPartTicket);
                    this.saveState();
                    const partSynced = await this.syncRecordToGoogleSheets({
                        type: 'PARTS_DEMAND_BACKUP',
                        data: connectedPartTicket
                    });
                    if (!partSynced) {
                        this.showMirrorToast(this.activeLanguage === 'id'
                            ? 'Permintaan suku cadang tersimpan di perangkat, tetapi gagal disinkronkan.'
                            : 'Part request was saved locally, but cloud sync failed.', true);
                        this.renderAll();
                        quickForm.reset();
                        return;
                    }
                }

                this.renderAll();
                quickForm.reset();
                this.showMirrorToast(this.activeLanguage === 'id'
                    ? 'Pembaruan progres berhasil disinkronkan.'
                    : 'Progress update synced successfully.');
            } catch (err) {
                console.error("Failed pushing quick update:", err);
                this.showMirrorToast(err.message || (this.activeLanguage === 'id'
                    ? 'Pembaruan progres gagal disinkronkan.'
                    : 'Progress update could not be synced.'), true);
                this.renderAll();
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    const dict = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;
                    submitBtn.innerText = dict.quick_btn_submit;
                }
            }
        });
    }




    // ----------------------------------------------------------------------
    // Form 3: Parts Procurement Request Form
    // ----------------------------------------------------------------------
    if (procurementForm) {
        procurementForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = procurementForm.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.disabled = true;
            try {
                const formData = new FormData(procurementForm);
                const searchValue = String(formData.get('partScopeSearch') || '').trim();
                const logId = String(formData.get('partScopeLogId') || '');
                const log = this.serviceLogs.find(item => String(item.id) === logId);
                const activeLogs = this.serviceLogs.filter(item =>
                    this.getMirrorLifecycle(item).isActive
                );
                const match = activeLogs.find(item => this.getPartScopeOption(item) === searchValue);
                if (!log || !match || String(match.id) !== logId) {
                    throw new Error('Choose an active repair from the suggestions before submitting.');
                }
                const partName = String(formData.get('partName') || '').trim();
                const quantity = Number(formData.get('partQuantity'));
                if (!partName || !Number.isInteger(quantity) || quantity < 1) {
                    throw new Error('Enter a part name and a whole-number quantity greater than zero.');
                }


                const ticket = {
                    id: 'PRT-' + Date.now(),
                    bindingType: 'scope',
                    recordId: log.id,
                    sourceLogId: log.id,
                    serialNumber: log.serialNumber || '',
                    scopeModel: log.scopeModel || '',
                    partName,
                    quantity,
                    estimatedPrice: formData.get('partCost') ? Number(formData.get('partCost')) : '',
                    cost: formData.get('partCost') ? Number(formData.get('partCost')) : '',
                    sourceLink: String(formData.get('partSourceLink') || '').trim(),
                    supplier: String(formData.get('partSupplier') || '').trim(),
                    preferredVendor: String(formData.get('partSupplier') || '').trim(),
                    notes: String(formData.get('partRequestNotes') || '').trim(),
                    requestedByRole: this.currentUserRole,
                    requestedAt: new Date().toISOString(),
                    orderDate: '',
                    originCountry: '',
                    destination: '',
                    actualPrice: '',
                    finalVendor: '',
                    trackingLink: '',
                    estimatedEta: '',
                    partEta: '',
                    status: 'Awaiting Approval'
                };


                this.partsOrders.unshift(ticket);
                this.saveState();
                const synced = await this.syncRecordToGoogleSheets({ type: 'PARTS_DEMAND_BACKUP', data: ticket });
                this.renderPartsTable();
                this.renderProcurementAdminDashboard();
                procurementForm.reset();
                const scopeIdInput = document.getElementById('partScopeLogId');
                if (scopeIdInput) scopeIdInput.value = '';
                this.showMirrorToast(synced
                    ? 'Part request submitted and synced.'
                    : 'Request saved locally; cloud sync failed.', !synced);
            } catch (err) {
                this.showMirrorToast(err.message || 'Could not submit the part request.', true);
            } finally {
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    }


    const partScopeSearch = document.getElementById('partScopeSearch');
    const activeRepairResults = document.getElementById('activeRepairResults');
    if (partScopeSearch && activeRepairResults) {
        partScopeSearch.addEventListener('input', () => {
            const scopeIdInput = document.getElementById('partScopeLogId');
            if (scopeIdInput) scopeIdInput.value = '';
            this.renderActiveRepairSearchResults(partScopeSearch.value);
        });
        partScopeSearch.addEventListener('focus', () =>
            this.renderActiveRepairSearchResults(partScopeSearch.value)
        );
        partScopeSearch.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                activeRepairResults.hidden = true;
                partScopeSearch.setAttribute('aria-expanded', 'false');
            } else if (event.key === 'ArrowDown') {
                const firstOption = activeRepairResults.querySelector('[role="option"]');
                if (firstOption) {
                    event.preventDefault();
                    firstOption.focus();
                }
            }
        });
        activeRepairResults.addEventListener('click', event => {
            const option = event.target.closest('[data-scope-log-id]');
            if (!option) return;
            const selected = (this.activePartScopeOptions || []).find(item => item.id === option.dataset.scopeLogId);
            if (!selected) return;
            partScopeSearch.value = selected.label;
            const scopeIdInput = document.getElementById('partScopeLogId');
            if (scopeIdInput) scopeIdInput.value = selected.id;
            activeRepairResults.hidden = true;
            partScopeSearch.setAttribute('aria-expanded', 'false');
            partScopeSearch.focus();
        });
        document.addEventListener('click', event => {
            if (event.target === partScopeSearch || activeRepairResults.contains(event.target)) return;
            activeRepairResults.hidden = true;
            partScopeSearch.setAttribute('aria-expanded', 'false');
        });
    }


    // ----------------------------------------------------------------------
    // Form 4: Warehouse Inventory Ingest Registration
    // ----------------------------------------------------------------------
    if (invForm) {
        invForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const nameInput = document.getElementById('invPartName');
                const skuInput = document.getElementById('invSku');
                const lotInput = document.getElementById('invLotNumber');
                const stockInput = document.getElementById('invCurrentStock');
                const vendorInput = document.getElementById('invVendor');
                const categoryInput = document.getElementById('invCategory');
                const qualityInput = document.getElementById('invQualityRating');
                const deliveryInput = document.getElementById('invDeliveryRating');
                const qualityNotesInput = document.getElementById('invQualityNotes');
                const currentStock = stockInput ? Number(stockInput.value) : 0;
                const qualityRating = qualityInput && qualityInput.value ? Number(qualityInput.value) : null;
                const deliveryRating = deliveryInput && deliveryInput.value ? Number(deliveryInput.value) : null;
                const qualityNotes = qualityNotesInput ? qualityNotesInput.value.trim() : '';
                if (!Number.isInteger(currentStock) || currentStock < 1) {
                    throw new Error('Enter a received stock quantity greater than zero.');
                }
                if (!nameInput?.value.trim() || !skuInput?.value.trim() || !lotInput?.value.trim() ||
                    !vendorInput?.value.trim() || !this.inventoryCategories.includes(categoryInput?.value)) {
                    throw new Error('Complete the part name, SKU, lot, category, and vendor fields.');
                }
                if ((qualityRating !== null && (!Number.isInteger(qualityRating) || qualityRating < 1 || qualityRating > 5)) ||
                    (deliveryRating !== null && (!Number.isInteger(deliveryRating) || deliveryRating < 1 || deliveryRating > 5))) {
                    throw new Error('Quality and delivery-speed observations must be ratings from 1 to 5.');
                }
                if (qualityNotes && qualityRating === null && deliveryRating === null) {
                    throw new Error('Record a quality or delivery-speed rating before adding receipt observations.');
                }


                const inventoryItem = {
                    partName: nameInput ? nameInput.value.trim() : "",
                    sku: skuInput ? skuInput.value.trim().toUpperCase() : "",
                    lotNumber: lotInput ? lotInput.value.trim().toUpperCase() : "",
                    currentStock,
                    vendor: vendorInput ? vendorInput.value.trim() : "",
                    category: categoryInput ? categoryInput.value : 'Other',
                    incomingDate: new Date().toISOString(),
                    outgoingDate: '',
                    receiptId: `RCV-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                    receivedQuantity: currentStock,
                    qualityRating,
                    deliveryRating,
                    qualityNotes,
                    usedInMinor: 0, usedInMedium: 0, usedInMajor: 0, usedInOverhaul: 0, usedInMajorCCD: 0, usedInOverhaulCCD: 0, usedInWarranty: 0
                };


                const synced = await this.syncRecordToGoogleSheets({ type: 'INVENTORY_INTAKE_V2', data: inventoryItem });
                if (!synced) throw new Error('Inventory intake was not synchronized. The item was not added locally.');
                const existingItem = this.inventoryPool.find(item =>
                    String(item.sku || '').toUpperCase() === inventoryItem.sku &&
                    String(item.lotNumber || '').toUpperCase() === inventoryItem.lotNumber
                );
                if (existingItem) {
                    existingItem.currentStock = (Number(existingItem.currentStock) || 0) + currentStock;
                    existingItem.partName = inventoryItem.partName || existingItem.partName;
                    existingItem.vendor = inventoryItem.vendor;
                    existingItem.category = inventoryItem.category;
                    existingItem.incomingDate = inventoryItem.incomingDate;
                } else {
                    this.inventoryPool.unshift(inventoryItem);
                }
                this.inventoryMovements.unshift({
                    movementId: inventoryItem.receiptId,
                    sku: inventoryItem.sku,
                    lotNumber: inventoryItem.lotNumber,
                    partName: inventoryItem.partName,
                    quantity: currentStock,
                    movementType: 'Incoming',
                    timestamp: inventoryItem.incomingDate,
                    repairCategory: '',
                    scopeLogId: '',
                    serialNumber: ''
                });
                if (qualityRating !== null || deliveryRating !== null) {
                    this.vendorQualityEvents.unshift({
                        id: inventoryItem.receiptId,
                        vendor: inventoryItem.vendor,
                        partName: inventoryItem.partName,
                        sku: inventoryItem.sku,
                        lotNumber: inventoryItem.lotNumber,
                        quantity: currentStock,
                        rating: qualityRating,
                        deliveryRating,
                        notes: qualityNotes,
                        receivedAt: new Date().toISOString()
                    });
                }
                this.saveState();
                this.renderInventoryTable();
                this.renderProcurementAdminDashboard();
                invForm.reset();
                invForm.closest('dialog')?.close();
                this.showMirrorToast(synced
                    ? (qualityRating ? 'Inventory added and vendor quality history synced.' : 'Inventory added and synced.')
                    : 'Inventory saved locally; cloud sync failed.', !synced);
            } catch (err) {
                console.error('Inventory intake failure:', err);
                this.showMirrorToast(err.message || 'Inventory intake failed.', true);
            }
        });
    }


    // ----------------------------------------------------------------------
    // Form 5: Private Engineering Notebook Form
    // ----------------------------------------------------------------------
    if (privateNoteForm) {
        privateNoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            try {
                const serialSelect = document.getElementById('adminNoteScopeSerial');
                const titleInput = document.getElementById('adminNoteTitle');
                const contentInput = document.getElementById('adminNoteContent');


                const noteObj = {
                    id: 'NOTE-' + Date.now(),
                    timestamp: new Date().toLocaleString(),
                    serialRef: serialSelect ? serialSelect.value : "GENERAL",
                    title: titleInput ? titleInput.value.trim() : "",
                    content: contentInput ? contentInput.value.trim() : ""
                };


                this.adminNotes.unshift(noteObj);
                this.saveState();
                this.syncRecordToGoogleSheets({ type: 'PRIVATE_NOTE_BACKUP', data: noteObj });
                this.renderAdminPrivateNotesTable();
                privateNoteForm.reset();


                alert(this.activeLanguage === 'id' ? 'Catatan rahasia teknisi tersimpan!' : 'Private engineering note saved and synced to cloud vault!');
            } catch (err) {
                console.error("Private note submission failure:", err);
            }
        });
    }
};


/* ==========================================================================
   9. DATA TABLE RENDERERS (MASTER LOGS, PARTS, INVENTORY, TIMELINE)
   ========================================================================== */
EndoAppStore.renderLogTable = function() {
    const tableBody = document.getElementById('masterLogDataTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    const searchQuery = document.getElementById('tableSearchInput')?.value.toLowerCase() || '';
    const filterStatus = document.getElementById('tableStatusFilter')?.value || 'ALL';
    const overdueLogs = filterStatus === 'OVERDUE' ? new Set(this.getOverdueScopeLogs()) : null;

    const filteredLogs = this.serviceLogs.filter(log => {
        const matchesSearch = (log.serialNumber || "").toLowerCase().includes(searchQuery) ||
                              (log.scopeModel || "").toLowerCase().includes(searchQuery);
        let matchesStatus = filterStatus === 'ALL';
        if (filterStatus === 'OVERDUE') matchesStatus = overdueLogs.has(log);
        else if (filterStatus === 'ACTIVE') matchesStatus = this.isActiveScopeLog(log);
        else if (filterStatus !== 'ALL') matchesStatus = log.inspectionStatus === filterStatus;
        return matchesSearch && matchesStatus;
    });

    if (filteredLogs.length === 0) {
        const fallbackMsg = this.activeLanguage === 'id'
            ? 'Tidak ada log layanan ditemukan yang cocok dengan kriteria filter.'
            : 'No logged service records found matching operational filter boundaries.';
        tableBody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 32px;">${fallbackMsg}</td></tr>`;
        return;
    }

    filteredLogs.forEach(log => {
        const tr = document.createElement('tr');
        tr.id = `row-node-${log.id}`;

        const timeline = this.getScopeTimeline(log);
        const countdownHtml = timeline.category === 'Warranty' || log.warrantyStatus === 'Active Warranty Coverage'
            ? `<span class="countdown-text-alert mirror-priority-text">⚡ CRITICAL PRIORITY - COMPLETE ASAP</span>`
            : log.scopeStatusState === 'Backup Stock Pool' || log.scopeStatusState === 'Dispatched / Completed'
                ? `<span class="countdown-text-alert text-alert-safe">✓ Cycle Closed</span>`
                : timeline.dueDate
                    ? `<div class="countdown-tracker-box">
                        <span class="countdown-text-alert ${timeline.warning === 'overdue' ? 'text-alert-urgent' : 'text-alert-normal'}">${timeline.daysRemaining < 0 ? `Overdue by ${Math.abs(timeline.daysRemaining)} days` : `${timeline.daysRemaining} days remaining`}</span>
                        <small>Estimated end: ${this.formatScopeDateInput(timeline.dueDate)}</small>
                        <div class="countdown-mini-bar"><div class="countdown-fill ${timeline.warning === 'overdue' ? 'fill-urgent' : ''}" style="width:${Math.max(3, timeline.progress)}%;"></div></div>
                    </div>`
                    : `<span style="color:var(--text-muted); font-size:12px;">Set repair category and start date</span>`;

        const warrantyMarkup = (log.repairComplexity === 'Warranty' || log.warrantyStatus === 'Active Warranty Coverage')
            ? `<span class="badge-warranty-active">Active</span>`
            : `<span class="badge-warranty-none">None</span>`;

        const mediaMarkup = log.mediaUrl
            ? `<a href="${log.mediaUrl}" target="_blank" rel="noopener" class="timestamp-label" style="text-decoration:none; display:inline-block; margin-bottom:6px; padding:4px 10px;">View Assets 🔗</a>`
            : `<span style="color:var(--text-muted); font-size:11px; display:block; margin-bottom:6px;">No Media</span>`;

        tr.innerHTML = `
            <td><strong>${log.logDate}</strong><br><span style="font-size:11px;color:var(--text-muted);">${log.timestamp}</span></td>
            <td><strong>${log.scopeModel}</strong><br><span style="font-size:11px;color:var(--text-muted);">${log.scopeType}</span></td>
            <td><code style="background:var(--bg-primary); border:1px solid var(--border-color); padding:4px 8px; border-radius:6px; font-weight:700; color:var(--text-main);">${log.serialNumber}</code></td>
            <td><span class="metric-card-badge badge-info" style="background:rgba(0,0,0,0.04); color:var(--text-main); font-weight:700;">${log.scopeStatusState || 'In Lab'}</span></td>
            <td>${warrantyMarkup}</td>
            <td>${countdownHtml}</td>
            <td>
                <div>
                    ${mediaMarkup}
                    <div style="max-height:60px; overflow-y:auto; font-size:11px; color:var(--text-muted); white-space:pre-wrap;">${log.repairNotes || 'No notes logged.'}</div>
                </div>
            </td>
            <td class="scope-row-actions" style="white-space: nowrap;">
                <button type="button" class="btn btn-interactive-outline" data-scope-action="edit" data-log-id="${this.escapeAttribute(log.id)}" style="padding:6px 12px; font-size:12px; border-color:var(--brand-primary); color:var(--brand-primary); font-weight:700; margin-right:4px;">
                    ✏️ ${this.escapeHtml(this.getUiText('scope_action_edit'))}
                </button>
                ${this.currentUserRole === 'admin'
                    ? `<button type="button" class="btn btn-interactive-outline" data-scope-action="delete" data-log-id="${this.escapeAttribute(log.id)}" style="padding:6px 12px; font-size:12px; border-color:var(--brand-danger); color:var(--brand-danger); font-weight:700;">🗑️ ${this.escapeHtml(this.getUiText('scope_action_delete'))}</button>`
                    : `<button type="button" class="btn btn-interactive-outline" data-scope-action="request-deletion" data-log-id="${this.escapeAttribute(log.id)}" style="padding:6px 12px; font-size:12px; border-color:var(--brand-warning); color:var(--brand-warning); font-weight:700;">${this.escapeHtml(this.getUiText('scope_action_request_deletion'))}</button>`
                }
            </td>
        `;
        tableBody.appendChild(tr);
    });
};

/* --------------------------------------------------------------------------
   Scope Editor, Full-Record Updates, and Role-Aware Deletion
   -------------------------------------------------------------------------- */
EndoAppStore.escapeHtml = function(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
};

EndoAppStore.escapeAttribute = function(value) {
    return this.escapeHtml(value);
};

EndoAppStore.isPrivateScopeField = function(key) {
    return /(private|admin.?note|terminal.?note|backend.?history|history.?log|^history$)/i.test(key);
};

EndoAppStore.appendScopeEditorField = function(parent, key, value, options) {
    const config = options || {};
    const field = document.createElement('label');
    field.className = 'form-control-group';
    field.appendChild(document.createTextNode(config.label || key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ')));

    let control;
    const isStructured = value !== null && typeof value === 'object';
    if (typeof value === 'boolean') {
        control = document.createElement('input');
        control.type = 'checkbox';
        control.checked = value;
        control.dataset.booleanValue = 'true';
    } else if (config.selectOptions) {
        control = document.createElement('select');
        control.className = 'form-select-element';
        const options = [...config.selectOptions];
        if (value && !options.includes(value)) options.unshift(value);
        else if (!value) options.unshift('');
        options.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.textContent = optionValue || 'Select an option...';
            control.appendChild(option);
        });
        control.value = value || '';
    } else if (isStructured || (typeof value === 'string' && value.length > 120) || config.multiline) {
        control = document.createElement('textarea');
        control.className = 'form-textarea-element';
        control.rows = isStructured ? 5 : 3;
        control.value = isStructured ? JSON.stringify(value, null, 2) : String(value == null ? '' : value);
        if (isStructured) control.dataset.jsonValue = 'true';
    } else {
        control = document.createElement('input');
        control.className = 'form-input-element';
        control.type = config.type || (typeof value === 'number' ? 'number' : 'text');
        control.value = String(value == null ? '' : value);
        if (typeof value === 'number') control.dataset.numberValue = 'true';
    }

    if (value === null) control.dataset.nullValue = 'true';
    if (config.scopeKey) control.dataset.scopeKey = config.scopeKey;
    if (config.mirrorKey) control.dataset.mirrorKey = config.mirrorKey;
    if (config.anatomyComponent) control.dataset.anatomyComponent = config.anatomyComponent;
    if (config.anatomyProperty) control.dataset.anatomyProperty = config.anatomyProperty;
    if (config.readOnly) control.readOnly = true;
    field.appendChild(control);
    parent.appendChild(field);
    return control;
};

EndoAppStore.openScopeEditor = function(logId) {
    const log = this.serviceLogs.find(item => String(item.id) === String(logId));
    const modal = document.getElementById('scopeEditModal');
    const editor = document.getElementById('scopeEditFields');
    const form = document.getElementById('scopeEditForm');
    if (!log || !modal || !editor || !form) return;

    this.editingScopeLogId = log.id;
    editor.replaceChildren();
    form.reset();
    this.renderScopeConsumedParts(log.id);

    const subtitle = document.getElementById('scopeEditSubtitle');
    if (subtitle) subtitle.textContent = `${log.scopeModel || 'Scope'} · S/N ${log.serialNumber || 'unknown'} · Report ${log.id}`;

    const makeSection = (title, description) => {
        const section = document.createElement('section');
        section.className = 'scope-edit-section';
        const heading = document.createElement('div');
        heading.className = 'scope-edit-section-heading';
        const headingTitle = document.createElement('h3');
        headingTitle.textContent = title;
        heading.appendChild(headingTitle);
        if (description) {
            const hint = document.createElement('p');
            hint.textContent = description;
            heading.appendChild(hint);
        }
        section.appendChild(heading);
        const grid = document.createElement('div');
        grid.className = 'scope-edit-grid';
        section.appendChild(grid);
        editor.appendChild(section);
        return grid;
    };

    const metaGrid = makeSection('Scope and Service Report', 'Edit all report fields for this scope instance.');
    const incomingGrid = makeSection('Incoming Scope Data / Details', 'Record the scope condition and parts received.');
    const outgoingGrid = makeSection('Outgoing Scope Data / Details', 'Record the scope condition and parts dispatched.');
    const mirrorGrid = makeSection('Mirror Dashboard Tracking', 'These fields power the tracking register and lifecycle calculations.');
    mirrorGrid.className = 'scope-edit-custom-grid';
    const anatomyGrid = makeSection('Parts and Anatomy Checklist', 'Update every recorded component and component-specific custom property.');
    anatomyGrid.className = 'scope-anatomy-grid';
    const customGrid = makeSection('Other and Custom Fields', 'Edit additional fields stored on this report.');
    customGrid.className = 'scope-edit-custom-grid';

    Object.keys(log).forEach(key => {
        if (key === 'id' || key === 'anatomyChecklist') return;
        if (key === 'scopeTracking') return;
        if (this.currentUserRole !== 'admin' && this.isPrivateScopeField(key)) return;
        const prefix = key.toLowerCase().startsWith('incoming') ? 'incoming' :
            key.toLowerCase().startsWith('outgoing') ? 'outgoing' : '';

        const fieldTarget = prefix ? (prefix === 'incoming' ? incomingGrid : outgoingGrid) : (
            ['scopeModel', 'scopeType', 'serialNumber', 'clientFacility', 'technicianName', 'logDate',
                'scopeStatusState', 'warrantyStatus', 'repairComplexity', 'downPaymentDate', 'inspectionStatus',
                'complaintText', 'mediaUrl', 'repairNotes', 'requestedPartName', 'timestamp'].includes(key)
                ? metaGrid : customGrid
        );
        this.appendScopeEditorField(fieldTarget, key, log[key], {
            scopeKey: key,
            multiline: /notes|details|complaint|data/i.test(key),
            type: /date$/i.test(key) && /^\d{4}-\d{2}-\d{2}$/.test(String(log[key] || '')) ? 'date' : undefined,
            selectOptions: key === 'scopeStatusState'
                ? ['Incoming (Pending Report)', 'In Repair', 'Waiting for Parts', 'Backup Stock Pool', 'Dispatched / Completed']
                : key === 'warrantyStatus'
                    ? ['No Warranty', 'Active Warranty', 'Active Warranty Coverage']
                    : key === 'inspectionStatus' ? ['Pending', 'Pass', 'Fail'] : undefined
        });
    });

    ['incomingScopeData', 'incomingScopeDetails', 'outgoingScopeData', 'outgoingScopeDetails'].forEach(key => {
        const isIncoming = key.startsWith('incoming');
        const alreadyPresent = Object.prototype.hasOwnProperty.call(log, key);
        if (!alreadyPresent) {
            this.appendScopeEditorField(isIncoming ? incomingGrid : outgoingGrid, key, log[key] || '', {
                scopeKey: key,
                multiline: true
            });
        }
    });

    const tracking = this.getScopeTracking(log);
    const mirrorFields = [
        ['repairCategory', 'Repair Category', { selectOptions: this.mirrorCategories }],
        ['brandScopeType', 'Brand / Scope Type', { selectOptions: this.mirrorBrands }],
        ['scopeModel', 'Scope Model', {}],
        ['serialNumber', 'Serial Number', {}],
        ['startDate', 'Start Date', { type: 'date' }],
        ['endDate', 'End Date', { readOnly: tracking.isOutOfLab && this.currentUserRole !== 'admin' }],
        ['notes', 'Notes', { multiline: true }],
        ['owner', 'Owner', {}],
        ['repairStage', 'Repair Stage', { selectOptions: this.mirrorStages }],
        ['refOther', 'Ref / Other', { multiline: true }]
    ];
    mirrorFields.forEach(([key, label, options]) => {
        this.appendScopeEditorField(mirrorGrid, key, tracking[key] == null ? '' : tracking[key], {
            ...options,
            label,
            mirrorKey: key
        });
    });

    const anatomy = log.anatomyChecklist && typeof log.anatomyChecklist === 'object' ? log.anatomyChecklist : {};
    const componentKeys = new Set(Array.from({ length: 33 }, (_, index) => `comp_${String(index + 1).padStart(2, '0')}`));
    Object.keys(anatomy).forEach(key => componentKeys.add(key));
    [...componentKeys].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).forEach(componentKey => {
        const component = anatomy[componentKey] && typeof anatomy[componentKey] === 'object' ? anatomy[componentKey] : {};
        const card = document.createElement('div');
        card.className = 'scope-edit-anatomy-card';
        const number = componentKey.replace(/^comp_/, '');
        const title = document.createElement('div');
        title.className = 'scope-edit-anatomy-title';
        title.textContent = `${number}. ${this.lookupAnatomyComponentName(number) || componentKey}`;
        card.appendChild(title);
        this.appendScopeEditorField(card, `${componentKey} status`, component.status || 'Pass', {
            anatomyComponent: componentKey,
            anatomyProperty: 'status',
            selectOptions: ['Pass', 'Fail', 'Pending']
        });
        this.appendScopeEditorField(card, `${componentKey} details`, component.desc || '', {
            anatomyComponent: componentKey,
            anatomyProperty: 'desc',
            multiline: true
        });
        Object.keys(component).filter(property => property !== 'status' && property !== 'desc').forEach(property => {
            this.appendScopeEditorField(card, `${componentKey} ${property}`, component[property], {
                anatomyComponent: componentKey,
                anatomyProperty: property
            });
        });
        anatomyGrid.appendChild(card);
    });

    const idField = this.appendScopeEditorField(metaGrid, 'Record ID', log.id, { readOnly: true });
    idField.dataset.scopeKey = '';
    const estimatedEnd = this.appendScopeEditorField(
        metaGrid,
        'Estimated End Date',
        this.getScopeTimeline(log).isWarranty
            ? 'Complete ASAP'
            : this.formatScopeDateInput(this.getScopeTimeline(log).dueDate),
        { readOnly: true }
    );
    estimatedEnd.dataset.scopeKey = '';
    const deletionSection = document.getElementById('scopeDeletionRequestSection');
    const requestButton = document.getElementById('scopeRequestDeletionButton');
    const deleteButton = document.getElementById('scopeDeleteButton');
    const role = this.currentUserRole;
    if (deletionSection) deletionSection.hidden = role !== 'tech';
    if (requestButton) requestButton.hidden = role !== 'tech';
    if (deleteButton) deleteButton.hidden = role !== 'admin';
    const reason = document.getElementById('scopeDeletionReason');
    if (reason) reason.value = '';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('scope-editor-open');
    this.refreshPartsProcurementData();
};

EndoAppStore.closeScopeEditor = function() {
    const modal = document.getElementById('scopeEditModal');
    if (modal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
    }
    document.body.classList.remove('scope-editor-open');
    this.editingScopeLogId = null;
};

EndoAppStore.saveScopeEditor = async function() {
    const log = this.serviceLogs.find(item => String(item.id) === String(this.editingScopeLogId));
    const form = document.getElementById('scopeEditForm');
    if (!log || !form) return;
    const updatedLog = JSON.parse(JSON.stringify(log));

    try {
        form.querySelectorAll('[data-scope-key]').forEach(control => {
            const key = control.dataset.scopeKey;
            if (!key) return;
            updatedLog[key] = this.getScopeEditorValue(control);
        });

        const scopeTracking = this.getScopeTracking(updatedLog);
        form.querySelectorAll('[data-mirror-key]').forEach(control => {
            const key = control.dataset.mirrorKey;
            scopeTracking[key] = this.getScopeEditorValue(control);
        });
        updatedLog.scopeTracking = scopeTracking;
        const timeline = this.getScopeTimeline({ ...updatedLog, scopeTracking });
        updatedLog.estimatedEndDate = this.formatScopeDateInput(timeline.dueDate);
        scopeTracking.estimatedEndDate = updatedLog.estimatedEndDate;
        updatedLog.scopeModel = scopeTracking.scopeModel || updatedLog.scopeModel;
        updatedLog.serialNumber = scopeTracking.serialNumber || updatedLog.serialNumber;
        if (scopeTracking.brandScopeType) updatedLog.scopeType = scopeTracking.brandScopeType;
        if (scopeTracking.repairCategory) updatedLog.repairComplexity = scopeTracking.repairCategory;
        if (scopeTracking.notes !== undefined) updatedLog.repairNotes = scopeTracking.notes;
        if (scopeTracking.owner !== undefined) updatedLog.technicianName = scopeTracking.owner;
        if (scopeTracking.startDate) updatedLog.downPaymentDate = scopeTracking.startDate;

        const anatomy = updatedLog.anatomyChecklist && typeof updatedLog.anatomyChecklist === 'object'
            ? updatedLog.anatomyChecklist : {};
        form.querySelectorAll('[data-anatomy-component][data-anatomy-property]').forEach(control => {
            const componentKey = control.dataset.anatomyComponent;
            const property = control.dataset.anatomyProperty;
            if (!anatomy[componentKey]) anatomy[componentKey] = {};
            anatomy[componentKey][property] = this.getScopeEditorValue(control);
        });
        updatedLog.anatomyChecklist = anatomy;
    } catch (error) {
        alert(`Invalid JSON in a structured field: ${error.message}`);
        return;
    }

    const index = this.serviceLogs.findIndex(item => String(item.id) === String(this.editingScopeLogId));
    if (index < 0) return;
    const saveButton = form.querySelector('button[type="submit"]');
    if (saveButton) saveButton.disabled = true;
    try {
        const synced = await this.syncRecordToGoogleSheets({ type: 'SCOPE_DATA_UPDATE', data: updatedLog });
        if (!synced) {
            this.showMirrorToast(
                this.activeLanguage === 'id'
                    ? 'Pembaruan scope gagal disinkronkan. Perubahan lokal belum diterapkan.'
                    : 'Scope updates could not be synchronized. No local changes were applied.',
                true
            );
            return;
        }
        this.serviceLogs[index] = updatedLog;
        this.saveState();
        this.renderScopeMirrorDashboard();
        this.closeScopeEditor();
        this.renderAll();
        this.showMirrorToast(this.activeLanguage === 'id' ? 'Perubahan scope tersimpan dan disinkronkan.' : 'Scope updates saved and synced.');
    } finally {
        if (saveButton) saveButton.disabled = false;
    }
};

EndoAppStore.getScopeEditorValue = function(control) {
    if (control.dataset.booleanValue === 'true') return control.checked;
    if (control.dataset.jsonValue === 'true') return JSON.parse(control.value);
    if (control.dataset.numberValue === 'true' && control.value !== '') return Number(control.value);
    if (control.dataset.nullValue === 'true' && control.value === '') return null;
    return control.value;
};

EndoAppStore.requestPartForCurrentScope = async function() {
    const log = this.serviceLogs.find(item => String(item.id) === String(this.editingScopeLogId));
    const form = document.getElementById('scopeEditForm');
    if (!log || !form) return;
    const formData = new FormData(form);
    const partName = String(formData.get('editPartName') || '').trim();
    const quantity = Number(formData.get('editPartQuantity'));
    const priceValue = String(formData.get('editPartPrice') || '').trim();
    const sourceLink = String(formData.get('editPartSourceLink') || '').trim();
    if (!partName || !Number.isInteger(quantity) || quantity < 1) {
        this.showMirrorToast('Enter a part name and a whole-number quantity greater than zero.', true);
        return;
    }
    if (priceValue && (!Number.isFinite(Number(priceValue)) || Number(priceValue) < 0)) {
        this.showMirrorToast('Estimated price must be a non-negative number.', true);
        return;
    }
    if (sourceLink && !this.safeProcurementUrl(sourceLink)) {
        this.showMirrorToast('Enter a valid HTTP(S) vendor source link.', true);
        return;
    }
    const requestButton = document.getElementById('scopePartRequestButton');
    if (requestButton) requestButton.disabled = true;
    const ticket = {
        id: `PRT-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        bindingType: 'scope',
        recordId: log.id,
        sourceLogId: log.id,
        serialNumber: log.serialNumber || '',
        scopeModel: log.scopeModel || '',
        partName,
        quantity,
        estimatedPrice: priceValue ? Number(priceValue) : '',
        cost: priceValue ? Number(priceValue) : '',
        sourceLink,
        supplier: String(formData.get('editPartVendor') || '').trim(),
        preferredVendor: String(formData.get('editPartVendor') || '').trim(),
        notes: String(formData.get('editPartNotes') || '').trim(),
        requestedAt: new Date().toISOString(),
        actualPrice: '',
        finalVendor: '',
        trackingLink: '',
        estimatedEta: '',
        orderDate: '',
        originCountry: '',
        destination: '',
        status: 'Awaiting Approval',
        requestedByRole: this.currentUserRole || 'tech',
        context: `Requested from service report ${log.id}`
    };
    try {
        this.partsOrders.unshift(ticket);
        this.saveState();
        const synced = await this.syncRecordToGoogleSheets({ type: 'PARTS_DEMAND_BACKUP', data: ticket });
        if (this.currentActiveView === 'parts') this.renderPartsTable();
        this.renderProcurementAdminDashboard();
        form.elements.editPartName.value = '';
        form.elements.editPartQuantity.value = '1';
        form.elements.editPartPrice.value = '';
        form.elements.editPartSourceLink.value = '';
        form.elements.editPartVendor.value = '';
        form.elements.editPartNotes.value = '';
        this.showMirrorToast(synced
            ? 'Part request submitted and linked to this scope.'
            : 'Part request saved locally; cloud sync failed.', !synced);
    } catch (error) {
        this.partsOrders = this.partsOrders.filter(item => item.id !== ticket.id);
        this.saveState();
        console.error('Could not submit scope-linked part request:', error);
        this.showMirrorToast(error.message || 'Could not submit the part request.', true);
    } finally {
        if (requestButton) requestButton.disabled = false;
    }
};

EndoAppStore.requestContentDeletion = async function(logId, suppliedReason) {
    const log = this.serviceLogs.find(item => String(item.id) === String(logId));
    if (!log) return;
    if (this.currentUserRole !== 'tech') {
        alert('Content deletion requests are available to technicians only. Administrators can delete records directly.');
        return;
    }
    const rawReason = typeof suppliedReason === 'string'
        ? suppliedReason
        : 'Deletion review requested from the scope list.';
    const reason = String(rawReason || '').trim();
    if (!reason) {
        if (rawReason !== null) alert('Enter a reason before submitting the deletion request.');
        return;
    }
    const request = {
        id: `DELREQ-${Date.now()}`,
        recordId: log.id,
        serialNumber: log.serialNumber || '',
        scopeModel: log.scopeModel || '',
        requestedByRole: this.currentUserRole,
        reason,
        status: 'Pending Review',
        requestedAt: new Date().toISOString()
    };
    const synced = await this.syncRecordToGoogleSheets({ type: 'CONTENT_DELETION_REQUEST', data: request });
    if (!synced) {
        this.showMirrorToast(
            this.activeLanguage === 'id'
                ? 'Permintaan penghapusan gagal dikirim ke Google Sheets.'
                : 'The deletion request could not be sent to Google Sheets.',
            true
        );
        return false;
    }
    alert(this.activeLanguage === 'id'
        ? 'Permintaan penghapusan telah dikirim untuk ditinjau administrator. Data scope tidak dihapus.'
        : 'Deletion request submitted for administrator review. The scope record was not deleted.');
    return true;
};

EndoAppStore.purgeLogRecord = async function(logId) {
    if (this.currentUserRole !== 'admin') {
        alert('Only administrators can delete scope records.');
        return;
    }
    if (!confirm(this.activeLanguage === 'id' ? "Hapus log perbaikan ini secara permanen?" : "Permanently delete this service report record?")) return;

    const idx = this.serviceLogs.findIndex(log => String(log.id) === String(logId));
    if (idx !== -1) {
        const synced = await this.syncRecordToGoogleSheets({ id: logId, type: 'RECORD_DELETION_SIGNAL', status: 'DELETED' });
        if (!synced) {
            this.showMirrorToast(
                this.activeLanguage === 'id'
                    ? 'Penghapusan gagal disinkronkan. Data lokal tidak dihapus.'
                    : 'Record deletion could not be synchronized. The local record was not removed.',
                true
            );
            return false;
        }
        this.serviceLogs.splice(idx, 1);
        this.saveState();
        this.closeScopeEditor();
        this.renderAll();
        alert(this.activeLanguage === 'id' ? 'Data berhasil dihapus!' : 'Record removed successfully.');
        return true;
    }
    return false;
};

/* --------------------------------------------------------------------------
   Parts Table Renderer
   -------------------------------------------------------------------------- */
EndoAppStore.renderPartsTable = function() {
    const list = document.getElementById('partsProcurementTableBody');
    if (!list) return;
    list.replaceChildren();
    if (!this.partsOrders.length) {
        const empty = document.createElement('p');
        empty.className = 'mirror-empty-state';
        empty.textContent = 'No part requests have been submitted yet.';
        list.appendChild(empty);
        this.renderProcurementAdminDashboard();
        return;
    }

    [...this.partsOrders].sort((a, b) =>
        String(b.requestedAt || b.timestamp || '').localeCompare(String(a.requestedAt || a.timestamp || ''))
    ).forEach(part => {
        const card = document.createElement('article');
        card.className = 'parts-request-card';
        const header = document.createElement('header');
        header.className = 'parts-request-card-header';
        const title = document.createElement('h4');
        title.textContent = part.partName || 'Unnamed part';
        const status = document.createElement('span');
        status.className = `parts-status-pill ${part.status === 'Received' ? 'is-received' : part.status === 'Ordered' ? 'is-ordered' : ''}`;
        status.textContent = part.status || 'Awaiting Approval';
        header.append(title, status);
        const scope = document.createElement('p');
        scope.className = 'parts-request-meta';
        scope.textContent = `${part.quantity || 1} × · S/N ${part.serialNumber || '—'} · Request ${part.id || '—'}`;
        card.append(header, scope);
        if (part.notes) {
            const notes = document.createElement('p');
            notes.className = 'admin-part-notes';
            notes.textContent = part.notes;
            card.appendChild(notes);
        }
        const orderDetails = [part.finalVendor || part.supplier, part.actualPrice || part.estimatedPrice || part.cost,
            part.estimatedEta || part.partEta].filter(Boolean).join(' · ');
        if (orderDetails) {
            const details = document.createElement('p');
            details.className = 'parts-request-meta';
            details.textContent = orderDetails;
            card.appendChild(details);
        }
        const trackingUrl = this.safeProcurementUrl(part.trackingLink || part.sourceLink);
        if (trackingUrl) {
            const link = document.createElement('a');
            link.href = trackingUrl;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = part.trackingLink ? 'Track shipment ↗' : 'Vendor source ↗';
            card.appendChild(link);
        }
        list.appendChild(card);
    });
    this.renderProcurementAdminDashboard();
};

EndoAppStore.safeProcurementUrl = function(value) {
    try {
        const url = new URL(String(value || ''));
        return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';
    } catch (error) {
        return '';
    }
};

EndoAppStore.getPartScopeOption = function(log) {
    return `${log.serialNumber || 'No serial'} — ${log.scopeModel || 'Scope'} · ${log.id}`;
};

EndoAppStore.getKnownVendors = function() {
    return [...new Set([
        ...this.partsOrders.flatMap(part => [part.preferredVendor, part.supplier, part.finalVendor]),
        ...this.inventoryPool.map(item => item.vendor),
        ...this.vendorRatings.map(item => item.vendor),
        ...this.vendorQualityEvents.map(item => item.vendor)
    ].map(value => String(value || '').trim()).filter(Boolean))]
        .sort((a, b) => a.localeCompare(b));
};

EndoAppStore.refreshPartsProcurementData = async function() {
    if (!this.currentAuthToken || !this.googleWebhookUrl) return;
    try {
        const response = await fetch(this.googleWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ type: 'GET_PROCUREMENT_DATA', authToken: this.currentAuthToken })
        });
        if (!response.ok) throw new Error(`Apps Script returned ${response.status}.`);
        const result = await response.json();
        if (result.status !== 'SUCCESS') throw new Error(result.message || 'Procurement data could not be loaded.');
        if (Array.isArray(result.orders)) this.partsOrders = result.orders;
        if (Array.isArray(result.vendors)) this.vendorRatings = result.vendors;
        if (Array.isArray(result.qualityEvents)) this.vendorQualityEvents = result.qualityEvents;
        if (Array.isArray(result.inventoryMovements)) this.inventoryMovements = result.inventoryMovements;
        if (Array.isArray(result.inventory)) {
            const cloudInventoryKeys = new Set(result.inventory.map(item =>
                `String(item.sku||'').trim().toUpperCase()|{String(item.lotNumber || '').trim().toUpperCase()}`
            ));
            const localOnlyInventory = this.inventoryPool.filter(item =>
                !cloudInventoryKeys.has(`String(item.sku||'').trim().toUpperCase()|{String(item.lotNumber || '').trim().toUpperCase()}`)
            );
            this.inventoryPool = [...result.inventory, ...localOnlyInventory];
        }
        this.saveState();
        this.populateScopeSelector();
        this.renderPartsTable();
        this.renderInventoryTable();
        this.renderScopeConsumedParts();
    } catch (error) {
        console.error('Could not refresh parts procurement data:', error);
        this.showMirrorToast('Could not refresh procurement data from the cloud.', true);
    }
};

EndoAppStore.createProcurementField = function(labelText, name, value, type, options) {
    const wrapper = document.createElement('label');
    wrapper.className = 'form-control-group';
    wrapper.appendChild(document.createTextNode(labelText));
    let control;
    if (options) {
        control = document.createElement('select');
        options.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.textContent = optionValue;
            control.appendChild(option);
        });
    } else if (type === 'textarea') {
        control = document.createElement('textarea');
        control.rows = 3;
    } else {
        control = document.createElement('input');
        control.type = type || 'text';
    }
    control.className = 'form-input-element';
    control.name = name;
    const stringValue = value == null ? '' : String(value);
    control.value = type === 'date' ? stringValue.slice(0, 10) : stringValue;
    if (type === 'number') {
        control.min = '0';
        control.step = '0.01';
        control.inputMode = 'decimal';
    }
    wrapper.appendChild(control);
    return wrapper;
};

EndoAppStore.getProcurementLocations = function() {
    return {
        origins: ['Australia', 'China', 'France', 'Germany', 'Indonesia', 'Japan', 'Malaysia',
            'Netherlands', 'Philippines', 'Singapore', 'South Korea', 'Taiwan', 'Thailand',
            'United Kingdom', 'United States'],
        destinations: ['Jakarta, Indonesia', 'Singapore', 'Kuala Lumpur, Malaysia', 'Bangkok, Thailand',
            'Manila, Philippines', 'Tokyo, Japan', 'Seoul, South Korea', 'Taipei, Taiwan',
            'Sydney, Australia', 'Shanghai, China', 'London, United Kingdom', 'Paris, France',
            'Frankfurt, Germany', 'Amsterdam, Netherlands', 'New York, United States']
    };
};

EndoAppStore.renderProcurementAdminDashboard = function() {
    const reviewList = document.getElementById('adminProcurementReviewList');
    const vendorList = document.getElementById('vendorQualityList');
    if (!reviewList || !vendorList) return;
    const expandedPartIds = new Set(
        [...reviewList.querySelectorAll('.admin-part-disclosure[open]')]
            .map(disclosure => disclosure.dataset.partId)
    );
    reviewList.replaceChildren();
    vendorList.replaceChildren();
    const statusRank = { 'Awaiting Approval': 0, 'In Procurement': 1, Ordered: 2, Received: 3 };
    const locations = this.getProcurementLocations();
    const orders = [...this.partsOrders].sort((a, b) =>
        (statusRank[a.status] ?? 1) - (statusRank[b.status] ?? 1)
    );
    if (!orders.length) {
        const empty = document.createElement('p');
        empty.className = 'mirror-empty-state';
        empty.textContent = 'No procurement requests to review.';
        reviewList.appendChild(empty);
    }
    orders.forEach(part => {
        const card = document.createElement('article');
        card.className = 'admin-part-card';
        card.dataset.partId = part.id;
        const disclosure = document.createElement('details');
        disclosure.className = 'admin-part-disclosure';
        disclosure.dataset.partId = part.id;
        disclosure.open = expandedPartIds.has(String(part.id));
        const header = document.createElement('summary');
        header.className = 'admin-part-card-header';
        const heading = document.createElement('div');
        const title = document.createElement('h4');
        title.textContent = `${part.partName || 'Part request'} · Qty ${part.quantity || 1}`;
        const meta = document.createElement('p');
        meta.className = 'admin-part-meta';
        meta.textContent = `S/N ${part.serialNumber || '—'} · ${part.id || ''} · ${part.requestedByRole || 'staff'}`;
        heading.append(title, meta);
        const status = document.createElement('span');
        status.className = `parts-status-pill ${part.status === 'Received' ? 'is-received' : part.status === 'Ordered' ? 'is-ordered' : ''}`;
        status.textContent = part.status || 'Awaiting Approval';
        header.append(heading, status);
        disclosure.appendChild(header);
        const content = document.createElement('div');
        content.className = 'admin-part-content';
        if (part.notes) {
            const notes = document.createElement('p');
            notes.className = 'admin-part-notes';
            notes.textContent = `Technician notes: ${part.notes}`;
            content.appendChild(notes);
        }
        const sourceUrl = this.safeProcurementUrl(part.sourceLink);
        if (sourceUrl) {
            const link = document.createElement('a');
            link.href = sourceUrl;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = 'Open vendor source ↗';
            content.appendChild(link);
        }

        const form = document.createElement('form');
        form.className = 'admin-part-form';
        form.dataset.adminPartForm = part.id;
        form.append(
            this.createProcurementField('Actual pricing', 'actualPrice', part.actualPrice, 'number'),
            this.createProcurementField('Final vendor', 'finalVendor', part.finalVendor || part.preferredVendor || '', 'text'),
            this.createProcurementField('Order tracking link', 'trackingLink', part.trackingLink, 'url'),
            this.createProcurementField('Estimated ETA', 'estimatedEta', part.estimatedEta || '', 'date'),
            this.createProcurementField('Order date', 'orderDate', part.orderDate || '', 'date'),
            this.createProcurementField('Vendor origin', 'originCountry', part.originCountry || '', '', ['', ...locations.origins]),
            this.createProcurementField('Arrival destination', 'destination', part.destination || 'Jakarta, Indonesia', '', ['', ...locations.destinations]),
            this.createProcurementField('Request status', 'status', part.status || 'Awaiting Approval', '', [
                'Awaiting Approval', 'In Procurement', 'Ordered', ...(part.status === 'Received' ? ['Received'] : [])
            ])
        );
        const statusSelect = form.querySelector('select[name="status"]');
        const receivedOption = statusSelect && [...statusSelect.options].find(option => option.value === 'Received');
        if (receivedOption && part.status !== 'Received') receivedOption.disabled = true;
        const save = document.createElement('button');
        save.type = 'submit';
        save.className = 'btn btn-interactive-primary admin-part-save';
        save.textContent = 'Save procurement details';
        form.appendChild(save);
        content.appendChild(form);
        if (part.status === 'Ordered') {
            const receiptPanel = document.createElement('section');
            receiptPanel.className = 'part-receipt-panel';
            const receiptTitle = document.createElement('h5');
            receiptTitle.textContent = 'Receive parts & add to inventory';
            const receiptHint = document.createElement('p');
            receiptHint.textContent = 'Log the delivered batch and its quality. This receipt updates stock and vendor history together.';
            receiptPanel.append(receiptTitle, receiptHint);
            const receiptForm = document.createElement('form');
            receiptForm.className = 'part-receipt-form';
            receiptForm.dataset.partReceiptForm = part.id;
            const skuField = this.createProcurementField('Inventory SKU', 'sku', part.inventorySku || '', 'text');
            const lotField = this.createProcurementField('Lot / batch number', 'lotNumber', part.inventoryLot || '', 'text');
            const quantityField = this.createProcurementField('Received quantity', 'receivedQuantity', part.receivedQuantity || part.quantity || 1, 'number');
            const categoryField = this.createProcurementField('Inventory category', 'category', part.inventoryCategory || 'Other', '', ['', ...this.inventoryCategories]);
            const qualityField = this.createProcurementField(this.getUiText('inv_quality_rating'), 'qualityRating', '', '', ['', '1', '2', '3', '4', '5']);
            const speedField = this.createProcurementField(this.getUiText('inv_delivery_speed'), 'deliveryRating', '', '', ['', '1', '2', '3', '4', '5']);
            const notesField = this.createProcurementField(this.getUiText('inv_quality_notes'), 'qualityNotes', '', 'textarea');
            const qualityPlaceholder = qualityField.querySelector('option[value=""]');
            if (qualityPlaceholder) qualityPlaceholder.textContent = this.getUiText('inv_quality_select_rating');
            const categoryPlaceholder = categoryField.querySelector('option[value=""]');
            if (categoryPlaceholder) categoryPlaceholder.textContent = 'Select a category';
            notesField.classList.add('part-receipt-notes');
            [skuField, lotField, quantityField, categoryField, qualityField, speedField].forEach(field => {
                const control = field.querySelector('input, select, textarea');
                if (control) control.required = true;
            });
            const quantityInput = quantityField.querySelector('input');
            if (quantityInput) quantityInput.min = '1';
            const receiveButton = document.createElement('button');
            receiveButton.type = 'submit';
            receiveButton.className = 'btn btn-interactive-primary';
            receiveButton.textContent = 'Confirm receipt & update vendor history';
            receiptForm.append(skuField, lotField, quantityField, categoryField, qualityField, speedField, notesField, receiveButton);
            receiptPanel.appendChild(receiptForm);
            content.appendChild(receiptPanel);
        } else if (part.status === 'Received') {
            const receiptSummary = document.createElement('p');
            receiptSummary.className = 'vendor-quality-summary';
            receiptSummary.textContent = `Received ${part.receivedQuantity || part.quantity || 1} unit(s) · ${part.qualityRating ? `${part.qualityRating}/5 quality logged` : 'receipt recorded'}`;
            content.appendChild(receiptSummary);
        }
        disclosure.appendChild(content);
        card.appendChild(disclosure);
        reviewList.appendChild(card);
    });

    this.getKnownVendors().forEach(vendor => {
        const events = this.vendorQualityEvents
            .filter(item => String(item.vendor || '').toLowerCase() === vendor.toLowerCase())
            .sort((a, b) => String(b.receivedAt || '').localeCompare(String(a.receivedAt || '')));
        const qualityEvents = events.filter(item => Number(item.rating) >= 1 && Number(item.rating) <= 5);
        const speedEvents = events.filter(item => Number(item.deliveryRating) >= 1 && Number(item.deliveryRating) <= 5);
        const averageRating = qualityEvents.length
            ? qualityEvents.reduce((total, item) => total + Number(item.rating), 0) / qualityEvents.length
            : 0;
        const averageSpeed = speedEvents.length
            ? speedEvents.reduce((total, item) => total + Number(item.deliveryRating), 0) / speedEvents.length
            : 0;
        const card = document.createElement('article');
        card.className = 'vendor-quality-card';
        const header = document.createElement('header');
        header.className = 'vendor-quality-header';
        const title = document.createElement('h4');
        title.textContent = vendor;
        const rating = document.createElement('span');
        rating.className = 'vendor-rating-stars';
        const displayRating = qualityEvents.length ? Math.round(averageRating) : 0;
        const starString = displayRating ? ('★'.repeat(displayRating) + '☆'.repeat(5 - displayRating)) : '';
        rating.textContent = displayRating ? starString : this.getUiText('vendor_no_quality_rating');
        header.append(title, rating);
        card.appendChild(header);
        const summary = document.createElement('p');
        summary.className = 'vendor-quality-summary';
        const observationSummary = [
            qualityEvents.length ? `${this.getUiText('vendor_quality_average')}: ${averageRating.toFixed(1)} / 5` : '',
            speedEvents.length ? `${this.getUiText('vendor_speed_average')}: ${averageSpeed.toFixed(1)} / 5` : ''
        ].filter(Boolean);
        summary.textContent = events.length
            ? `${observationSummary.join(' · ')} · ${events.length} ${this.getUiText('vendor_receipt_count')}`
            : this.getUiText('vendor_no_receipts');
        card.appendChild(summary);
        events.slice(0, 5).forEach(item => {
            const entry = document.createElement('div');
            entry.className = 'vendor-quality-event';
            const entryHeader = document.createElement('div');
            entryHeader.className = 'vendor-quality-event-header';
            const entryTitle = document.createElement('span');
            entryTitle.className = 'vendor-quality-event-title';
            entryTitle.textContent = `${item.partName || 'Received part'}${item.sku ? ` · ${item.sku}` : ''}${item.quantity ? ` · Qty ${item.quantity}` : ''}`;
            const entryRating = document.createElement('span');
            entryRating.className = 'vendor-rating-stars';
            const itemRating = Number(item.rating) || 0;
            entryRating.textContent = itemRating
                ? '★'.repeat(itemRating) + '☆'.repeat(5 - itemRating)
                : this.getUiText('vendor_no_quality_rating');
            entryHeader.append(entryTitle, entryRating);
            const entryDate = document.createElement('div');
            entryDate.className = 'vendor-quality-event-date';
            entryDate.textContent = item.receivedAt ? new Date(item.receivedAt).toLocaleDateString() : 'Date not recorded';
            entry.append(entryHeader, entryDate);
            if (Number(item.deliveryRating) >= 1 && Number(item.deliveryRating) <= 5) {
                const speed = document.createElement('div');
                speed.className = 'vendor-quality-event-date';
                speed.textContent = `${this.getUiText('vendor_speed_average')}: ${item.deliveryRating}/5`;
                entry.appendChild(speed);
            }
            if (item.notes) {
                const note = document.createElement('p');
                note.className = 'vendor-rating-notes';
                note.textContent = item.notes;
                entry.appendChild(note);
            }
            card.appendChild(entry);
        });
        vendorList.appendChild(card);
    });
    this.renderPartsTransitMap();
};

EndoAppStore.saveProcurementUpdate = async function(form) {
    if (this.currentUserRole !== 'admin') {
        this.showMirrorToast('Only administrators can update procurement details.', true);
        return;
    }
    const part = this.partsOrders.find(item => String(item.id) === String(form.dataset.adminPartForm));
    if (!part) throw new Error('Part request could not be found.');
    const values = new FormData(form);
    const updated = {
        ...part,
        actualPrice: values.get('actualPrice') || '',
        finalVendor: String(values.get('finalVendor') || '').trim(),
        trackingLink: String(values.get('trackingLink') || '').trim(),
        estimatedEta: String(values.get('estimatedEta') || ''),
        partEta: String(values.get('estimatedEta') || ''),
        orderDate: String(values.get('orderDate') || ''),
        originCountry: String(values.get('originCountry') || ''),
        destination: String(values.get('destination') || ''),
        status: part.status === 'Received' ? 'Received' : String(values.get('status') || 'Awaiting Approval')
    };
    if (updated.status === 'Ordered' && !updated.orderDate) {
        updated.orderDate = this.formatScopeDateInput(new Date());
    }
    Object.assign(part, updated);
    this.saveState();
    const synced = await this.syncRecordToGoogleSheets({ type: 'PARTS_PROCUREMENT_UPDATE', data: updated });
    this.renderPartsTable();
    this.showMirrorToast(synced ? 'Procurement details synced.' : 'Saved locally; cloud sync failed.', !synced);
};

EndoAppStore.savePartReceipt = async function(form) {
    if (this.currentUserRole !== 'admin') {
        this.showMirrorToast('Only administrators can record part receipts.', true);
        return;
    }
    const part = this.partsOrders.find(item => String(item.id) === String(form.dataset.partReceiptForm));
    if (!part || part.status !== 'Ordered') throw new Error('This order is not awaiting receipt.');
    const vendor = String(part.finalVendor || part.preferredVendor || part.supplier || '').trim();
    if (!vendor) throw new Error('Enter and save the final vendor before recording receipt.');
    const values = new FormData(form);
    const receivedQuantity = Number(values.get('receivedQuantity'));
    const qualityRating = Number(values.get('qualityRating'));
    const deliveryRating = Number(values.get('deliveryRating'));
    const category = String(values.get('category') || '');
    const sku = String(values.get('sku') || '').trim().toUpperCase();
    const lotNumber = String(values.get('lotNumber') || '').trim().toUpperCase();
    if (!sku || !lotNumber || !Number.isInteger(receivedQuantity) || receivedQuantity < 1 ||
        !this.inventoryCategories.includes(category) ||
        !Number.isInteger(qualityRating) || qualityRating < 1 || qualityRating > 5 ||
        !Number.isInteger(deliveryRating) || deliveryRating < 1 || deliveryRating > 5) {
        throw new Error('Enter an inventory SKU, lot, category, positive received quantity, and quality and delivery-speed ratings from 1 to 5.');
    }
    const receivedAt = new Date().toISOString();
    const receiptId = `RCV-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const receipt = {
        ticketId: part.id,
        receiptId,
        vendor,
        partName: part.partName || '',
        category,
        sku,
        lotNumber,
        receivedQuantity,
        rating: qualityRating,
        deliveryRating,
        notes: String(values.get('qualityNotes') || '').trim(),
        receivedAt
    };
    const synced = await this.syncRecordToGoogleSheets({ type: 'PARTS_RECEIVE_INTAKE', data: receipt });
    if (!synced) throw new Error('Could not sync this receipt. It was not added to local inventory.');

    part.status = 'Received';
    part.receiptId = receiptId;
    part.receivedAt = receivedAt;
    part.receivedQuantity = receivedQuantity;
    part.inventorySku = sku;
    part.inventoryLot = lotNumber;
    part.inventoryCategory = category;
    part.qualityRating = qualityRating;
    part.deliveryRating = deliveryRating;
    part.qualityNotes = receipt.notes;
    const inventoryItem = this.inventoryPool.find(item =>
        String(item.sku || '').toUpperCase() === sku && String(item.lotNumber || '').toUpperCase() === lotNumber
    );
    if (inventoryItem) {
        inventoryItem.currentStock = Number(inventoryItem.currentStock || 0) + receivedQuantity;
        inventoryItem.vendor = vendor;
 inventoryItem.category = category;
        inventoryItem.incomingDate = receivedAt;
    } else {
        this.inventoryPool.unshift({
            partName: receipt.partName,
            sku,
            lotNumber,
            currentStock: receivedQuantity,
            vendor,
            category,
            incomingDate: receivedAt,
            outgoingDate: '',
            usedInMinor: 0,
            usedInMedium: 0,
            usedInMajor: 0,
            usedInOverhaul: 0,
            usedInMajorCCD: 0,
            usedInOverhaulCCD: 0,
            usedInWarranty: 0
        });
    }
    this.inventoryMovements.unshift({
        movementId: receiptId,
        sku,
        lotNumber,
        partName: receipt.partName,
        quantity: receivedQuantity,
        movementType: 'Incoming',
        timestamp: receivedAt,
        repairCategory: '',
        scopeLogId: part.sourceLogId || '',
        serialNumber: part.serialNumber || ''
    });
    this.vendorQualityEvents.unshift({
        id: receiptId,
        ticketId: part.id,
        vendor,
        partName: receipt.partName,
        sku,
        lotNumber,
        quantity: receivedQuantity,
        rating: qualityRating,
        deliveryRating,
        notes: receipt.notes,
        receivedAt
    });
    this.saveState();
    this.renderPartsTable();
    this.renderInventoryTable();
    this.showMirrorToast('Parts received, inventory updated, and vendor history recorded.');
};

EndoAppStore.renderPartsTransitMap = function() {
    const map = document.getElementById('partsTransitMap');
    const list = document.getElementById('partsTransitList');
    const routesGroup = document.getElementById('partsTransitRoutes');
    const continentsGroup = document.getElementById('partsMapContinents');
    const caption = document.getElementById('partsMapCaption');
    if (!map || !list || !routesGroup || !continentsGroup || !caption) return;
    const coordinateTable = {
        Australia: [134, -25], China: [104, 35], France: [2, 46], Germany: [10, 51],
        Indonesia: [107, -6], Japan: [138, 36], Malaysia: [102, 4], Netherlands: [5, 52],
        Philippines: [122, 12], Singapore: [104, 1], 'South Korea': [128, 36], Taiwan: [121, 24],
        Thailand: [101, 15], 'United Kingdom': [-2, 54], 'United States': [-98, 39]
    };
    const destinationCoordinates = {
        'Jakarta, Indonesia': [107, -6], Singapore: [104, 1], 'Kuala Lumpur, Malaysia': [102, 3],
        'Bangkok, Thailand': [101, 14], 'Manila, Philippines': [121, 14], 'Tokyo, Japan': [140, 36],
        'Seoul, South Korea': [127, 37], 'Taipei, Taiwan': [121, 25], 'Sydney, Australia': [151, -34],
        'Shanghai, China': [121, 31], 'London, United Kingdom': [0, 52], 'Paris, France': [2, 49],
        'Frankfurt, Germany': [9, 50], 'Amsterdam, Netherlands': [5, 52], 'New York, United States': [-74, 41]
    };
    const toPoint = coordinates => ({
        x: 65 + ((coordinates[0] + 180) / 360) * 770,
        y: 35 + ((90 - coordinates[1]) / 180) * 320
    });
    if (!continentsGroup.childElementCount) {
        window.NaturalEarthLandPaths.forEach(pathData => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathData);
            continentsGroup.appendChild(path);
        });
    }
    const parseLocalDate = value => {
        const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
        const date = match
            ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
            : new Date(value);
        return Number.isNaN(date.getTime()) ? null : date;
    };
    const transitOrders = this.partsOrders.filter(part =>
        part.status === 'Ordered' && part.originCountry && part.destination &&
        part.orderDate && part.estimatedEta && coordinateTable[part.originCountry] &&
        destinationCoordinates[part.destination]
    );
    list.replaceChildren();
    routesGroup.replaceChildren();
    map.setAttribute('viewBox', '0 0 900 390');
    if (!transitOrders.length) {
        caption.textContent = this.getUiText('parts_transit_empty');
        return;
    }

    const routeColors = ['#2563eb', '#db2777', '#059669', '#d97706', '#7c3aed', '#0891b2', '#dc2626', '#4f46e5'];
    const addSvgElement = (parent, name, attributes) => {
        const element = document.createElementNS('http://www.w3.org/2000/svg', name);
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
        parent.appendChild(element);
        return element;
    };
    const now = new Date();
    transitOrders.forEach((part, index) => {
        const color = routeColors[index % routeColors.length];
        const start = toPoint(coordinateTable[part.originCountry]);
        const end = toPoint(destinationCoordinates[part.destination]);
        const control = {
            x: (start.x + end.x) / 2,
            y: Math.min(start.y, end.y) - 30 - (index % 3) * 9
        };
        const route = addSvgElement(routesGroup, 'path', {
            class: 'map-route',
            d: `M ${start.x} ${start.y} Q ${control.x} ${control.y} ${end.x} ${end.y}`
        });
        route.style.setProperty('--route-color', color);
        const routeTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        routeTitle.textContent = `${part.partName || 'Part order'}: ${part.originCountry} to ${part.destination}`;
        route.appendChild(routeTitle);
        const originDot = addSvgElement(routesGroup, 'circle', {
            class: 'map-origin-dot',
            cx: start.x,
            cy: start.y,
            r: 5
        });
        originDot.style.setProperty('--route-color', color);
        addSvgElement(routesGroup, 'circle', {
            class: 'map-destination-dot',
            cx: end.x,
            cy: end.y,
            r: 5
        });
        const plane = addSvgElement(routesGroup, 'g', {
            class: 'map-plane',
            transform: `translate(${start.x} ${start.y})`
        });
        plane.style.setProperty('--route-color', color);
        const planeTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        planeTitle.textContent = `${part.partName || 'Part order'} progress`;
        plane.appendChild(planeTitle);
        addSvgElement(plane, 'circle', { r: 10, fill: color });
        const planeIcon = addSvgElement(plane, 'text', {
            y: 4,
            'text-anchor': 'middle'
        });
        planeIcon.textContent = '✈';

        const orderDate = parseLocalDate(part.orderDate);
        const etaDate = parseLocalDate(part.estimatedEta);
        let progress = 0;
        if (orderDate && etaDate && etaDate.getTime() > orderDate.getTime()) {
            progress = Math.min(1, Math.max(0, (now.getTime() - orderDate.getTime()) /
                (etaDate.getTime() - orderDate.getTime())));
        } else if (etaDate && now >= etaDate) {
            progress = 1;
        }
        const inverse = 1 - progress;
        const position = {
            x: inverse * inverse * start.x + 2 * inverse * progress * control.x + progress * progress * end.x,
            y: inverse * inverse * start.y + 2 * inverse * progress * control.y + progress * progress * end.y
        };
        plane.setAttribute('transform', `translate(${position.x} ${position.y})`);

        const item = document.createElement('div');
        item.className = 'parts-transit-card';
        item.setAttribute('role', 'listitem');
        const header = document.createElement('div');
        header.className = 'parts-transit-card-header';
        const title = document.createElement('strong');
        title.textContent = `${part.partName || 'Part order'} · ${part.serialNumber || 'Unlinked'}`;
        const progressLabel = document.createElement('span');
        progressLabel.className = 'parts-transit-progress';
        progressLabel.textContent = `${Math.round(progress * 100)}%`;
        progressLabel.style.setProperty('--route-color', color);
        header.append(title, progressLabel);
        const detail = document.createElement('span');
        detail.textContent = `${part.originCountry} → ${part.destination} · ETA ${part.estimatedEta}`;
        item.append(header, detail);
        list.appendChild(item);
    });
    caption.textContent = this.getUiText('parts_transit_summary').replace('{count}', String(transitOrders.length));
};

EndoAppStore.approvePartAction = function(partId) {
    if (this.currentUserRole !== 'admin') return;
    const part = this.partsOrders.find(item => String(item.id) === String(partId));
    if (!part) return;
    part.status = 'Ordered';
    if (!part.orderDate) part.orderDate = this.formatScopeDateInput(new Date());
    this.saveState();
    this.syncRecordToGoogleSheets({ type: 'PARTS_PROCUREMENT_UPDATE', data: part });
    this.renderPartsTable();
};



/* --------------------------------------------------------------------------
   Warehouse Inventory Table Renderer
   -------------------------------------------------------------------------- */
EndoAppStore.renderInventoryTable = function() {
    const grid = document.getElementById('inventoryCategoryGrid');
    const legacyTableBody = document.getElementById('warehouseInventoryTableBody');
    if (legacyTableBody) legacyTableBody.replaceChildren();
    const categorySelect = document.getElementById('invCategory');
    if (categorySelect && categorySelect.options.length === 0) {
        const categoryOptions = this.inventoryCategories.map(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            return option;
        });
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = 'Select part category';
        placeholder.selected = true;
        categorySelect.replaceChildren(placeholder, ...categoryOptions);
    }
    if (categorySelect?.options[0]) categorySelect.options[0].textContent = this.getUiText('inv_category_placeholder');
    const inventorySearch = document.getElementById('inventorySearchInput');
    if (inventorySearch) inventorySearch.placeholder = this.getUiText('inv_search_placeholder');
    if (!grid) return;

    const expandedItemKeys = new Set(
        [...grid.querySelectorAll('.inventory-item-card[open]')]
            .map(card => card.dataset.inventoryKey)
    );

    const search = String(document.getElementById('inventorySearchInput')?.value || '').trim().toLowerCase();
    const filtered = this.inventoryPool.filter(item => [
        item.partName, item.sku, item.lotNumber, item.vendor, item.category || 'Other'
    ].some(value => String(value || '').toLowerCase().includes(search)));
    grid.replaceChildren();
    if (filtered.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'inventory-empty-state';
        empty.textContent = this.inventoryPool.length
            ? this.getUiText('inv_empty_search')
            : this.getUiText('inv_empty_stock');
        grid.appendChild(empty);
        return;
    }


    const grouped = new Map();
    filtered.forEach(item => {
        const category = this.inventoryCategories.includes(item.category) ? item.category : 'Other';
        if (!grouped.has(category)) grouped.set(category, []);
        grouped.get(category).push(item);
    });


    this.inventoryCategories.forEach(category => {
        const items = grouped.get(category);
        if (!items || !items.length) return;
        const section = document.createElement('section');
        section.className = 'inventory-category-section';
        const heading = document.createElement('h4');
        heading.className = 'inventory-category-heading';
        heading.textContent = `${category} · ${items.length}`;
        const cards = document.createElement('div');
        cards.className = 'inventory-item-grid';
        items.forEach(item => {
            const stockCount = Math.max(0, Number(item.currentStock) || 0);
            const isLow = stockCount < 2;
            const key = `${String(item.sku || '').toUpperCase()}|${String(item.lotNumber || '').toUpperCase()}`;
            const escape = value => this.escapeHtml(value == null ? '' : String(value));
            const text = key => this.getUiText(key);
            const editable = (field, labelKey, value, display = value) =>
                `<button type="button" class="inventory-inline-value" data-inventory-edit="${field}" data-inventory-key="${this.escapeAttribute(key)}" aria-label="${this.escapeAttribute(text('inv_edit'))} ${this.escapeHtml(text(labelKey))}: ${this.escapeAttribute(String(value == null ? '' : value))}">${escape(display || text('inv_set_value'))}</button>`;
            const usageProperties = {
                'Minor': 'usedInMinor',
                'Medium': 'usedInMedium',
                'Major': 'usedInMajor',
                'Overhaul': 'usedInOverhaul',
                'Major + CCD': 'usedInMajorCCD',
                'Overhaul + CCD': 'usedInOverhaulCCD',
                'Warranty': 'usedInWarranty'
            };
            const categoryUsage = this.mirrorCategories
                .filter(value => !['Backup Scope', 'Cancelled'].includes(value))
                .map(repairCategory => {
                    const loggedQuantity = this.inventoryMovements
                        .filter(movement =>
                            String(movement.sku || '').toUpperCase() === String(item.sku || '').toUpperCase() &&
                            String(movement.lotNumber || '').toUpperCase() === String(item.lotNumber || '').toUpperCase() &&
                            movement.repairCategory === repairCategory &&
                            String(movement.movementType || '').startsWith('Outgoing')
                        )
                        .reduce((total, movement) => total + (Number(movement.quantity) || 0), 0);
                    const legacyQuantity = usageProperties[repairCategory]
                        ? Number(item[usageProperties[repairCategory]]) || 0
                        : 0;
                    return `<span>${escape(repairCategory)} <strong>${Math.max(loggedQuantity, legacyQuantity)}</strong></span>`;
                }).join('');
            const card = document.createElement('details');
            card.className = `inventory-item-card${isLow ? ' is-low-stock' : ''}`;
            card.dataset.inventoryKey = key;
            card.open = expandedItemKeys.has(key);
            card.innerHTML = `
                <summary class="inventory-item-summary">
                    <span class="inventory-item-identity">
                        <strong>${escape(item.partName || 'Unnamed part')}</strong>
                        <span class="inventory-item-sku">SKU ${escape(item.sku || '—')}</span>
                    </span>
                    <span class="inventory-on-hand${isLow ? ' is-low' : ''}">
                        <span class="inventory-on-hand-label">${escape(text('th_inv_stock'))}</span>
                        <strong>${stockCount}</strong>
                        <span class="inventory-on-hand-units">${escape(text('inv_units'))}</span>
                    </span>
                    ${isLow ? `<span class="low-stock-pill">${escape(text('inv_low_stock'))}</span>` : ''}
                    <span class="inventory-item-toggle" aria-hidden="true"></span>
                </summary>
                <div class="inventory-item-details">
                    <div class="inventory-item-edit-grid">
                        <label>${escape(text('inv_lbl_name'))} ${editable('partName', 'inventory_edit_part_name', item.partName, item.partName || 'Unnamed part')}</label>
                        <label>${escape(text('inv_lbl_category'))} ${editable('category', 'inventory_edit_category', category)}</label>
                        <label>${escape(text('inv_lot_label'))} ${editable('lotNumber', 'inventory_edit_lot_number', item.lotNumber)}</label>
                        <label>${escape(text('inv_quantity_adjustment_label'))} ${editable('currentStock', 'inventory_edit_quantity', stockCount, `${stockCount} ${text('inv_units')}`)}</label>
                        <label>${escape(text('inv_vendor_label'))} ${editable('vendor', 'inventory_edit_vendor', item.vendor)}</label>
                    </div>
                    <dl class="inventory-movement-dates">
                        <div><dt>${escape(text('inv_incoming'))}</dt><dd>${editable('incomingDate', 'inventory_edit_incoming_date', item.incomingDate || '', this.formatInventoryDate(item.incomingDate))}</dd></div>
                        <div><dt>${escape(text('inv_outgoing'))}</dt><dd>${editable('outgoingDate', 'inventory_edit_outgoing_date', item.outgoingDate || '', this.formatInventoryDate(item.outgoingDate))}</dd></div>
                        <div><dt>${escape(text('inv_last_repair_category'))}</dt><dd>${escape(item.lastRepairCategory || '—')}</dd></div>
                    </dl>
                    <div class="inventory-usage-summary">${categoryUsage}</div>
                </div>`;
            cards.appendChild(card);
        });
        section.append(heading, cards);
        grid.appendChild(section);
    });
};


EndoAppStore.getUiText = function(key) {
    const language = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;
    return language[key] || EndoTranslationMatrix.en[key] || key;
};


EndoAppStore.formatInventoryDate = function(value) {
    if (!value) return this.getUiText('inv_not_recorded');
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleDateString();
};


EndoAppStore.beginInventoryInlineEdit = function(button) {
    const [sku, lotNumber] = String(button.dataset.inventoryKey || '').split('|');
    const item = this.inventoryPool.find(entry =>
        String(entry.sku || '').toUpperCase() === sku &&
        String(entry.lotNumber || '').toUpperCase() === lotNumber
    );
    if (!item) return;
    const field = button.dataset.inventoryEdit;
    const allowedFields = ['partName', 'category', 'lotNumber', 'currentStock', 'vendor', 'incomingDate', 'outgoingDate'];
    if (!allowedFields.includes(field)) return;


    const control = field === 'category' ? document.createElement('select') : document.createElement('input');
    control.className = 'inventory-inline-editor';
    control.dataset.inventoryKey = button.dataset.inventoryKey;
    control.dataset.inventoryField = field;
    const inventoryFieldLabelKeys = {
        partName: 'inventory_edit_part_name',
        category: 'inventory_edit_category',
        lotNumber: 'inventory_edit_lot_number',
        currentStock: 'inventory_edit_quantity',
        vendor: 'inventory_edit_vendor',
        incomingDate: 'inventory_edit_incoming_date',
        outgoingDate: 'inventory_edit_outgoing_date'
    };
    control.setAttribute('aria-label', field === 'currentStock'
        ? this.getUiText('inv_adjust_quantity')
        : `${this.getUiText('inv_edit')} ${this.getUiText(inventoryFieldLabelKeys[field])}`);
    if (field === 'category') {
        this.inventoryCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            control.appendChild(option);
        });
        control.value = this.inventoryCategories.includes(item.category) ? item.category : 'Other';
    } else {
        control.type = field === 'currentStock' ? 'number' :
            (field === 'incomingDate' || field === 'outgoingDate' ? 'date' : 'text');
        control.value = field === 'currentStock' ? String(Number(item.currentStock) || 0) :
            (field.endsWith('Date') ? String(item[field] || '').slice(0, 10) : String(item[field] || ''));
        if (field === 'currentStock') {
            control.min = '0';
            control.step = '1';
            control.inputMode = 'numeric';
        }
    }
    let editor = control;
    if (field === 'currentStock') {
        const wrapper = document.createElement('div');
        wrapper.className = 'inventory-inline-editor-wrap';
        const categoryLabel = document.createElement('label');
        categoryLabel.className = 'inventory-outgoing-category';
        categoryLabel.appendChild(document.createTextNode(this.getUiText('inv_repair_category_if_decrease')));
        const categorySelect = document.createElement('select');
        categorySelect.className = 'inventory-inline-editor';
        categorySelect.dataset.inventoryRepairCategory = 'true';
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = this.getUiText('inv_select_repair_category');
        categorySelect.appendChild(placeholder);
        this.mirrorCategories.filter(value => !['Backup Scope', 'Cancelled'].includes(value)).forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            categorySelect.appendChild(option);
        });
        categoryLabel.appendChild(categorySelect);
        const adjustmentHint = document.createElement('span');
        adjustmentHint.className = 'inventory-adjustment-hint';
        adjustmentHint.textContent = this.getUiText('inv_adjust_stock_hint');
        wrapper.append(control, categoryLabel, adjustmentHint);
        editor = wrapper;
    }
    button.replaceWith(editor);
    control.focus();
    if (control.select && control.type !== 'date' && control.type !== 'number') control.select();
    let completed = false;
    const finish = async save => {
        if (completed) return;
        completed = true;
        if (save && control.value !== '') {
            try {
                await this.saveInventoryInlineEdit(control);
                return;
            } catch (error) {
                console.error('Inventory inline update failed:', error);
                this.showMirrorToast(error.message || 'Inventory update failed.', true);
            }
        }
        this.renderInventoryTable();
    };
    if (field === 'currentStock') {
        editor.addEventListener('focusout', event => {
            if (!editor.contains(event.relatedTarget)) finish(true);
        });
    } else {
        control.addEventListener('change', () => finish(true), { once: true });
        control.addEventListener('blur', () => finish(true), { once: true });
    }
    control.addEventListener('keydown', event => {
        if (event.key === 'Enter' && control.tagName !== 'SELECT') {
            event.preventDefault();
            control.blur();
        } else if (event.key === 'Escape') {
            completed = true;
            this.renderInventoryTable();
        }
    });
};


EndoAppStore.saveInventoryInlineEdit = async function(control) {
    const [sku, originalLotNumber] = String(control.dataset.inventoryKey || '').split('|');
    const item = this.inventoryPool.find(entry =>
        String(entry.sku || '').toUpperCase() === sku &&
        String(entry.lotNumber || '').toUpperCase() === originalLotNumber
    );
    if (!item) throw new Error('Inventory item could not be found.');
    const field = control.dataset.inventoryField;
    let value = control.value.trim();
    if (field === 'currentStock') {
        value = Number(value);
        if (!Number.isInteger(value) || value < 0) throw new Error('Stock must be a whole number greater than or equal to zero.');
    }
    if (field === 'category' && !this.inventoryCategories.includes(value)) {
        throw new Error('Select one of the supported inventory categories.');
    }
    if (field === 'lotNumber' && !value) throw new Error('Lot number cannot be empty.');
    if (field === 'partName' && !value) throw new Error('Part name cannot be empty.');
    const previousValue = item[field];
    if (String(previousValue == null ? '' : previousValue) === String(value)) {
        this.renderInventoryTable();
        return;
    }
    const repairCategory = control.closest('.inventory-inline-editor-wrap')
        ?.querySelector('[data-inventory-repair-category]')?.value || '';
    if (field === 'currentStock' && Number(value) < Number(previousValue || 0) &&
        (!this.mirrorCategories.includes(repairCategory) || ['Backup Scope', 'Cancelled'].includes(repairCategory))) {
        throw new Error('Select the repair category for the outgoing stock correction.');
    }
    const movementId = `COR-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const synced = await this.syncRecordToGoogleSheets({
        type: 'RELATIONAL_INVENTORY_DECREMENT',
        data: {
            operation: 'edit',
            movementId,
            sku: item.sku,
            lookupLotNumber: item.lotNumber,
            lotNumber: field === 'lotNumber' ? value : item.lotNumber,
            updateField: field,
            repairCategory,
            [field]: value
        }
    });
    if (!synced) throw new Error('Inventory correction was not synchronized. No local change was made.');
    item[field] = value;
    if (field === 'currentStock' && Number(value) > Number(previousValue || 0)) {
        item.incomingDate = new Date().toISOString();
        this.inventoryMovements.unshift({
            movementId,
            sku: item.sku,
            lotNumber: item.lotNumber,
            partName: item.partName,
            quantity: Number(value) - Number(previousValue || 0),
            movementType: 'Incoming Correction',
            timestamp: item.incomingDate,
            repairCategory: '',
            scopeLogId: '',
            serialNumber: ''
        });
    }
    if (field === 'currentStock' && Number(value) < Number(previousValue || 0)) {
        item.outgoingDate = new Date().toISOString();
        item.lastRepairCategory = repairCategory;
        const usageProperty = {
            'Minor': 'usedInMinor',
            'Medium': 'usedInMedium',
            'Major': 'usedInMajor',
            'Overhaul': 'usedInOverhaul',
            'Major + CCD': 'usedInMajorCCD',
            'Overhaul + CCD': 'usedInOverhaulCCD',
            'Warranty': 'usedInWarranty'
        }[repairCategory];
        if (usageProperty) item[usageProperty] = (Number(item[usageProperty]) || 0) + Number(previousValue) - Number(value);
        this.inventoryMovements.unshift({
            movementId,
            sku: item.sku,
            lotNumber: item.lotNumber,
            partName: item.partName,
            quantity: Number(previousValue) - Number(value),
            movementType: 'Outgoing Correction',
            timestamp: item.outgoingDate,
            repairCategory,
            scopeLogId: '',
            serialNumber: ''
        });
    }
    this.saveState();
    this.renderInventoryTable();
    this.renderScopeConsumedParts();
    this.showMirrorToast('Inventory correction saved and synced.');
};


EndoAppStore.renderScopeConsumedParts = function(logId) {
    const picker = document.getElementById('scopeConsumedPartsPicker');
    const list = document.getElementById('scopeConsumedPartsList');
    const log = this.serviceLogs.find(item => String(item.id) === String(logId || this.editingScopeLogId));
    if (!picker || !list || !log) return;


    const previousSku = picker.querySelector('[data-consumed-part-sku]')?.value || '';
    const previousQuantity = picker.querySelector('[data-consumed-part-quantity]')?.value || '1';
    const previousCategory = picker.querySelector('[data-consumed-repair-category]')?.value || '';
    const text = key => this.getUiText(key);
    const availableItems = this.inventoryPool.filter(item => Number(item.currentStock) > 0);
    picker.replaceChildren();
    if (!availableItems.length) {
        const empty = document.createElement('p');
        empty.className = 'inventory-empty-state';
        empty.textContent = text('scope_consumed_none_available');
        picker.appendChild(empty);
    } else {
        const partLabel = document.createElement('label');
        partLabel.className = 'form-control-group';
        partLabel.appendChild(document.createTextNode(text('scope_consumed_available')));
        const partSelect = document.createElement('select');
        partSelect.className = 'form-select-element';
        partSelect.dataset.consumedPartSku = 'true';
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = text('scope_consumed_choose');
        partSelect.appendChild(placeholder);
        availableItems.forEach(item => {
            const option = document.createElement('option');
            option.value = `${item.sku}|${item.lotNumber}`;
            option.textContent = text('scope_consumed_option')
                .replace('{name}', String(item.partName || ''))
                .replace('{sku}', String(item.sku || ''))
                .replace('{lot}', String(item.lotNumber || ''))
                .replace('{available}', String(item.currentStock));
            partSelect.appendChild(option);
        });
        if (availableItems.some(item => `${item.sku}|${item.lotNumber}` === previousSku)) {
            partSelect.value = previousSku;
        }
        partLabel.appendChild(partSelect);


        const quantityLabel = document.createElement('label');
        quantityLabel.className = 'form-control-group';
        quantityLabel.appendChild(document.createTextNode(text('scope_consumed_quantity')));
        const quantity = document.createElement('input');
        quantity.className = 'form-input-element';
        quantity.type = 'number';
        quantity.min = '1';
        quantity.step = '1';
        quantity.value = previousQuantity;
        quantity.inputMode = 'numeric';
        quantity.dataset.consumedPartQuantity = 'true';
        quantity.setAttribute('aria-describedby', 'scopeConsumedAvailability scopeConsumedValidation');
        quantityLabel.appendChild(quantity);


        const categoryLabel = document.createElement('label');
        categoryLabel.className = 'form-control-group';
        categoryLabel.appendChild(document.createTextNode(text('scope_consumed_repair_category')));
        const category = document.createElement('select');
        category.className = 'form-select-element';
        category.dataset.consumedRepairCategory = 'true';
        const defaultCategory = this.getScopeTracking(log).repairCategory || log.repairComplexity || '';
        const categoryPlaceholder = document.createElement('option');
        categoryPlaceholder.value = '';
        categoryPlaceholder.textContent = text('scope_consumed_select_category');
        category.appendChild(categoryPlaceholder);
        this.mirrorCategories.filter(value => value !== 'Backup Scope' && value !== 'Cancelled').forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            category.appendChild(option);
        });
        category.value = previousCategory || defaultCategory;
        categoryLabel.appendChild(category);


        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-interactive-primary';
        button.dataset.consumeInventory = 'true';
        button.textContent = text('scope_consumed_link');
        const availability = document.createElement('p');
        availability.className = 'scope-consumed-availability';
        availability.dataset.consumedAvailability = 'true';
        availability.id = 'scopeConsumedAvailability';
        availability.setAttribute('role', 'status');
        availability.setAttribute('aria-live', 'polite');
        const validation = document.createElement('p');
        validation.className = 'scope-consumed-validation';
        validation.dataset.consumedValidation = 'true';
        validation.id = 'scopeConsumedValidation';
        validation.setAttribute('role', 'alert');
        validation.hidden = true;
        const actionGroup = document.createElement('div');
        actionGroup.className = 'scope-consumed-action';
        const actionHint = document.createElement('span');
        actionHint.textContent = text('scope_consumed_button_hint');
        actionGroup.append(button, actionHint);
        picker.append(partLabel, quantityLabel, categoryLabel, availability, validation, actionGroup);
        this.updateScopeConsumptionPreview();
    }


    const consumed = Array.isArray(log.partsConsumed) ? log.partsConsumed : [];
    list.replaceChildren();
    if (!consumed.length) {
        const empty = document.createElement('p');
        empty.className = 'inventory-empty-state';
        empty.textContent = text('scope_consumed_none_linked');
        list.appendChild(empty);
        return;
    }
    consumed.forEach(entry => {
        const card = document.createElement('article');
        card.className = 'scope-consumed-part-item';
        const title = document.createElement('strong');
        title.textContent = `${entry.quantity} × ${entry.partName}`;
        const details = document.createElement('span');
        details.textContent = `SKU ${entry.sku} · Lot ${entry.lotNumber} · ${entry.repairCategory} · ${this.formatInventoryDate(entry.outgoingDate)}`;
        card.append(title, details);
        list.appendChild(card);
    });
};

EndoAppStore.updateScopeConsumptionPreview = function(errorMessage) {
    const picker = document.getElementById('scopeConsumedPartsPicker');
    if (!picker) return;
    const partSelect = picker.querySelector('[data-consumed-part-sku]');
    const quantityInput = picker.querySelector('[data-consumed-part-quantity]');
    const categorySelect = picker.querySelector('[data-consumed-repair-category]');
    const availability = picker.querySelector('[data-consumed-availability]');
    const validation = picker.querySelector('[data-consumed-validation]');
    const button = picker.querySelector('[data-consume-inventory]');
    if (!partSelect || !quantityInput || !categorySelect || !availability || !validation || !button) return;

    const [sku, lotNumber] = String(partSelect.value || '').split('|');
    const item = this.inventoryPool.find(entry =>
        String(entry.sku || '') === sku && String(entry.lotNumber || '') === lotNumber
    );
    const available = item ? Math.max(0, Number(item.currentStock) || 0) : 0;
    quantityInput.max = item ? String(available) : '0';
    const quantity = Number(quantityInput.value);
    const validQuantity = Number.isInteger(quantity) && quantity >= 1 && quantity <= available;
    const validCategory = this.mirrorCategories.includes(categorySelect.value) &&
        !['Backup Scope', 'Cancelled'].includes(categorySelect.value);
    let problem = errorMessage || '';
    if (!problem && item && !validQuantity) {
        problem = this.getUiText('scope_consumed_quantity_error').replace('{available}', String(available));
    } else if (!problem && item && validQuantity && !validCategory) {
        problem = this.getUiText('scope_consumed_category_error');
    }

    if (item) {
        const remaining = validQuantity ? available - quantity : '—';
        availability.textContent = this.getUiText('scope_consumed_available_summary')
            .replace('{available}', String(available))
            .replace('{remaining}', String(remaining));
    } else {
        availability.textContent = this.getUiText('scope_consumed_select_item_hint');
    }
    validation.textContent = problem;
    validation.hidden = !problem;
    quantityInput.setAttribute('aria-invalid', String(Boolean(item && !validQuantity)));
    categorySelect.setAttribute('aria-invalid', String(Boolean(item && validQuantity && !validCategory)));
    quantityInput.setCustomValidity(item && !validQuantity
        ? this.getUiText('scope_consumed_quantity_error').replace('{available}', String(available))
        : '');
    button.disabled = !item || !validQuantity || !validCategory;
};


EndoAppStore.consumeInventoryForScope = async function(logId, requestedPartName) {
    const log = this.serviceLogs.find(item => String(item.id) === String(logId));
    if (!log) throw new Error('The scope record could not be found.');
    const tracking = this.getScopeTracking(log);
    let item;
    let quantity;
    let repairCategory;
    if (requestedPartName) {
        const normalizedPartName = String(requestedPartName).trim().toLowerCase();
        item = this.inventoryPool.find(entry => {
            const sku = String(entry.sku || '').trim().toLowerCase();
            const partName = String(entry.partName || '').trim().toLowerCase();
            return Number(entry.currentStock) > 0 && ((sku && sku === normalizedPartName) ||
                (partName && partName.includes(normalizedPartName)) ||
                (sku && normalizedPartName.includes(sku)));
        });
        quantity = 1;
        repairCategory = tracking.repairCategory || log.repairComplexity || 'Minor';
    } else {
        const picker = document.getElementById('scopeConsumedPartsPicker');
        const partSelect = picker?.querySelector('[data-consumed-part-sku]');
        const quantityInput = picker?.querySelector('[data-consumed-part-quantity]');
        const categorySelect = picker?.querySelector('[data-consumed-repair-category]');
        if (!partSelect || !quantityInput || !categorySelect) {
            throw new Error('The parts-consumed control is not ready.');
        }
        const [sku, lotNumber] = String(partSelect.value || '').split('|');
        item = this.inventoryPool.find(entry =>
            String(entry.sku || '') === sku && String(entry.lotNumber || '') === lotNumber
        );
        quantity = Number(quantityInput.value);
        repairCategory = categorySelect.value;
    }
    if (!item) throw new Error('Choose an available inventory item.');
    const stockAvailable = Number(item.currentStock);
    if (!Number.isInteger(stockAvailable) || stockAvailable < 0) throw new Error('The selected item has an invalid on-hand quantity. Correct its inventory record before consuming stock.');
    if (!Number.isInteger(quantity) || quantity < 1) throw new Error('Enter a whole quantity greater than zero.');
    if (quantity > stockAvailable) throw new Error('Requested quantity exceeds the available stock.');
    if (!this.mirrorCategories.includes(repairCategory) || ['Backup Scope', 'Cancelled'].includes(repairCategory)) {
        throw new Error('Select the repair category for this stock usage.');
    }


    const outgoingDate = new Date().toISOString();
    const movementId = `MOV-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const movement = {
        movementId,
        operation: 'consume',
        sku: item.sku,
        lotNumber: item.lotNumber,
        partName: item.partName,
        quantity,
        repairCategory,
        outgoingDate,
        scopeLogId: log.id,
        serialNumber: tracking.serialNumber || log.serialNumber || ''
    };
    const stockSynced = await this.syncRecordToGoogleSheets({
        type: 'RELATIONAL_INVENTORY_DECREMENT',
        data: movement
    });
    if (!stockSynced) throw new Error('Stock was not decremented because the outgoing movement could not be synced.');


    item.currentStock = Number(item.currentStock) - quantity;
    item.outgoingDate = outgoingDate;
    item.lastRepairCategory = repairCategory;
    const usageProperty = {
        'Minor': 'usedInMinor',
        'Medium': 'usedInMedium',
        'Major': 'usedInMajor',
        'Overhaul': 'usedInOverhaul',
        'Major + CCD': 'usedInMajorCCD',
        'Overhaul + CCD': 'usedInOverhaulCCD',
        'Warranty': 'usedInWarranty'
    }[repairCategory];
    if (usageProperty) item[usageProperty] = (Number(item[usageProperty]) || 0) + quantity;


    if (!Array.isArray(log.partsConsumed)) log.partsConsumed = [];
    log.partsConsumed.push({
        ...movement,
        category: item.category || 'Other',
        incomingDate: item.incomingDate || ''
    });
    this.inventoryMovements.unshift({
        movementId,
        sku: item.sku,
        lotNumber: item.lotNumber,
        partName: item.partName,
        quantity,
        movementType: 'Outgoing',
        timestamp: outgoingDate,
        repairCategory,
        scopeLogId: log.id,
        serialNumber: tracking.serialNumber || log.serialNumber || ''
    });
    this.saveState();
    const picker = document.getElementById('scopeConsumedPartsPicker');
    if (picker) {
        const partSelect = picker.querySelector('[data-consumed-part-sku]');
        const quantityInput = picker.querySelector('[data-consumed-part-quantity]');
        if (partSelect) partSelect.value = '';
        if (quantityInput) quantityInput.value = '1';
    }
    this.renderScopeConsumedParts(log.id);
    this.renderInventoryTable();
    const scopeSynced = await this.syncRecordToGoogleSheets({ type: 'SCOPE_DATA_UPDATE', data: log });
    this.renderScopeMirrorDashboard();
    if (!scopeSynced) {
        throw new Error('Inventory was decremented, but the scope usage details could not be synced. Refresh the scope record before retrying.');
    }
    this.showMirrorToast('Part linked to scope and outgoing stock synced.');
};


/* --------------------------------------------------------------------------
   Scope History Timeline Explorer
   -------------------------------------------------------------------------- */
EndoAppStore.generateTimelineStream = function(querySerial, historyFilter) {
    const container = document.getElementById('timelineStreamContainer');
    if (!container) return;


    const dict = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;
    if (querySerial !== undefined) this.activeHistorySerial = String(querySerial || '').trim();
    const serialQuery = String(querySerial !== undefined ? querySerial : this.activeHistorySerial).trim().toLowerCase();
    const historySearchInput = document.getElementById('historySearchInput');
    const textQuery = String(historyFilter !== undefined ? historyFilter : (historySearchInput ? historySearchInput.value : '')).trim().toLowerCase();
    const matchingLogs = this.serviceLogs.filter(log => {
        const serialMatch = !serialQuery ||
            String(log.serialNumber || '').toLowerCase().includes(serialQuery) ||
            String(log.scopeModel || '').toLowerCase().includes(serialQuery);
        const safeFields = Object.fromEntries(Object.entries(log).filter(([key]) =>
            this.currentUserRole === 'admin' || !this.isPrivateScopeField(key)
        ));
        const textMatch = !textQuery || JSON.stringify(safeFields).toLowerCase().includes(textQuery);
        return serialMatch && textMatch;
    });


    if (matchingLogs.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); padding: 48px;">
                ${this.escapeHtml(dict.timeline_no_records)} <strong>"${this.escapeHtml(querySerial || this.activeHistorySerial)}"</strong>
            </div>
        `;
        return;
    }


    const reportTime = log => {
        const dateValue = new Date(log.logDate || log.timestamp || '').getTime();
        const timestampValue = new Date(log.timestamp || '').getTime();
        return {
            date: Number.isNaN(dateValue) ? 0 : dateValue,
            timestamp: Number.isNaN(timestampValue) ? 0 : timestampValue
        };
    };
    const sortedLogs = [...matchingLogs].sort((a, b) => {
        const first = reportTime(a);
        const second = reportTime(b);
        return first.date - second.date || first.timestamp - second.timestamp ||
            String(a.id || '').localeCompare(String(b.id || ''));
    });


    container.innerHTML = '';


    sortedLogs.forEach((log, index) => {
        const milestoneNode = document.createElement('div');
        milestoneNode.className = 'timeline-milestone-node';


        let statusClass = 'node-pending';
        if (log.inspectionStatus === 'Pass') statusClass = 'node-pass';
        if (log.inspectionStatus === 'Fail') statusClass = 'node-fail';


        // Extract failure tags from 33 components
        let failuresHtml = '';
        if (log.anatomyChecklist) {
            const failedItems = Object.entries(log.anatomyChecklist)
                .filter(([_, v]) => v && v.status === 'Fail')
                .map(([k, v]) => {
                    const compNum = k.replace('comp_', '');
                    const compName = this.lookupAnatomyComponentName(compNum);
                    return `<span class="failure-tag">⚠️ ${this.escapeHtml(compName)}${v.desc ? ` (${this.escapeHtml(v.desc)})` : ''}</span>`;
                });


            if (failedItems.length > 0) {
                failuresHtml = `
                    <div class="timeline-component-failures-badge">
                        ${failedItems.join('')}
                    </div>
                `;
            }
        }


        const reportUrl = /^https?:\/\//i.test(String(log.mediaUrl || '')) ? this.escapeAttribute(log.mediaUrl) : '';
        milestoneNode.innerHTML = `
            <div class="timeline-node-dot ${statusClass}"></div>
            <div class="timeline-node-card">
                <div class="timeline-node-meta-header">
                    <div>
                        <strong style="font-size:16px;">${this.escapeHtml(log.logDate || log.timestamp || 'Undated report')}</strong>
                        <span style="font-size:12px; color:var(--text-muted); margin-left:8px;">Milestone #${index + 1}</span>
                    </div>
                    <div>
                        <span class="metric-card-badge ${log.inspectionStatus === 'Pass' ? 'badge-success' : log.inspectionStatus === 'Fail' ? 'badge-danger' : 'badge-warning'}">
                            ${this.escapeHtml(log.inspectionStatus || 'Pending')}
                        </span>
                    </div>
                </div>


                <div style="display:flex; flex-wrap:wrap; gap:16px; margin-bottom:12px; font-size:13px;">
                    <div><strong>Model:</strong> ${this.escapeHtml(log.scopeModel)} (${this.escapeHtml(log.scopeType)})</div>
                    <div><strong>S/N:</strong> <code>${this.escapeHtml(log.serialNumber)}</code></div>
                    <div><strong>Tech:</strong> ${this.escapeHtml(log.technicianName || 'N/A')}</div>
                    <div><strong>Facility:</strong> ${this.escapeHtml(log.clientFacility || 'N/A')}</div>
                    <div><strong>Complexity:</strong> ${this.escapeHtml(log.repairComplexity)}</div>
                </div>


                ${log.complaintText ? `<p style="font-size:13px; margin:6px 0; color:var(--text-main);"><strong>Complaint:</strong> ${this.escapeHtml(log.complaintText)}</p>` : ''}
                ${log.repairNotes ? `<p style="font-size:12px; color:var(--text-muted); background:var(--bg-secondary); padding:8px 12px; border-radius:6px; white-space:pre-wrap;">${this.escapeHtml(log.repairNotes)}</p>` : ''}
                ${failuresHtml}
                <div class="timeline-report-references">
                    <a href="#" class="timeline-report-link" data-open-report="${this.escapeAttribute(log.id)}">Service report ${this.escapeHtml(log.id || `#${index + 1}`)}</a>
                    ${reportUrl ? `<a href="${reportUrl}" target="_blank" rel="noopener noreferrer" class="timeline-report-link">View report assets ↗</a>` : ''}
                </div>
            </div>
        `;
        const reportLink = milestoneNode.querySelector('[data-open-report]');
        if (reportLink) reportLink.addEventListener('click', event => {
            event.preventDefault();
            this.openScopeEditor(log.id);
        });
        container.appendChild(milestoneNode);
    });
};


/* --------------------------------------------------------------------------
   Admin Terminal Hub & Private Notes
   -------------------------------------------------------------------------- */
EndoAppStore.evaluateAdminSessionStateDisplay = function() {
    const promptBox = document.getElementById('adminFormLockoutPrompt');
    const unlockedDashboard = document.getElementById('unlockedTerminalDashboard');


    if (this.adminAuthenticated) {
        if (promptBox) promptBox.style.display = 'none';
        if (unlockedDashboard) unlockedDashboard.style.display = 'flex';


        this.populateAdminScopeDropdown();
        this.renderAdminPrivateNotesTable();
        this.initTerminalDashboardFeatures();
    } else {
        if (promptBox) promptBox.style.display = 'flex';
        if (unlockedDashboard) unlockedDashboard.style.display = 'none';
        this.bindAdminConsoleAuthActionButtons();
    }
};


EndoAppStore.bindAdminConsoleAuthActionButtons = function() {
    const authBtn = document.getElementById('btnUnlockAdminConsole');
    if (!authBtn || authBtn.hasAttribute('data-bound')) return;


    authBtn.setAttribute('data-bound', 'true');
    authBtn.addEventListener('click', () => {
        alert(this.currentUserRole === 'admin'
            ? 'Administrator session is already authenticated.'
            : 'Administrator access is required. Sign in again with an administrator passcode.');
    });
};


EndoAppStore.initTerminalDashboardFeatures = function() {
    // Scratchpad auto-saver
    const scratchpad = document.getElementById('terminalScratchpadArea');
    if (scratchpad) {
        scratchpad.value = localStorage.getItem(this.adminScratchpadKey) || '';
        scratchpad.oninput = (e) => {
            localStorage.setItem(this.adminScratchpadKey, e.target.value);
        };
    }


    // Daily To-Do Checklist
    const appendTodoBtn = document.getElementById('btnAppendTerminalTodo');
    const todoInput = document.getElementById('terminalTodoInput');


    if (appendTodoBtn && !appendTodoBtn.hasAttribute('data-hooked')) {
        appendTodoBtn.setAttribute('data-hooked', 'true');
        appendTodoBtn.addEventListener('click', () => this.appendTerminalTodoAction());
        if (todoInput) {
            todoInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.appendTerminalTodoAction();
            });
        }
    }
    this.renderTerminalTodoList();
};


EndoAppStore.appendTerminalTodoAction = function() {
    const input = document.getElementById('terminalTodoInput');
    if (!input || !input.value.trim()) return;


    this.terminalTodos.push({
        id: 'TD-' + Date.now(),
        text: input.value.trim(),
        done: false
    });
    localStorage.setItem(this.adminTodoKey, JSON.stringify(this.terminalTodos));
    this.renderTerminalTodoList();
    input.value = '';
};


EndoAppStore.renderTerminalTodoList = function() {
    const container = document.getElementById('terminalTodoListContainer');
    if (!container) return;


    container.innerHTML = '';
    if (this.terminalTodos.length === 0) {
        container.innerHTML = `<li style="color:#475569; font-size:13px; text-align:center; padding-top:12px;">No active triage tasks.</li>`;
        return;
    }


    this.terminalTodos.forEach(item => {
        const li = document.createElement('li');
        li.className = `terminal-todo-item ${item.done ? 'todo-done' : ''}`;
        li.innerHTML = `
            <div style="display:flex; align-items:center; gap:8px;">
                <input type="checkbox" ${item.done ? 'checked' : ''} onclick="EndoAppStore.toggleTerminalTodoState('${item.id}')" style="cursor:pointer;" />
                <span style="font-family:monospace; font-size:13px; ${item.done ? 'text-decoration:line-through; opacity:0.6;' : ''}">${item.text}</span>
            </div>
            <button type="button" style="background:transparent; border:none; color:#ef4444; cursor:pointer;" onclick="EndoAppStore.destroyTerminalTodoItem('${item.id}')">✕</button>
        `;
        container.appendChild(li);
    });
};


EndoAppStore.toggleTerminalTodoState = function(itemId) {
    const item = this.terminalTodos.find(t => t.id === itemId);
    if (item) {
        item.done = !item.done;
        localStorage.setItem(this.adminTodoKey, JSON.stringify(this.terminalTodos));
        this.renderTerminalTodoList();
    }
};


EndoAppStore.destroyTerminalTodoItem = function(itemId) {
    this.terminalTodos = this.terminalTodos.filter(t => t.id !== itemId);
    localStorage.setItem(this.adminTodoKey, JSON.stringify(this.terminalTodos));
    this.renderTerminalTodoList();
};


EndoAppStore.renderAdminPrivateNotesTable = function() {
    const tableBody = document.getElementById('adminPrivateNotesTableBody');
    if (!tableBody) return;


    tableBody.innerHTML = '';
    if (this.adminNotes.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding:24px; color:var(--text-muted);">No secure internal comments recorded yet.</td></tr>';
        return;
    }


    this.adminNotes.forEach(note => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><small>${note.timestamp}</small></td>
            <td><code style="background:var(--border-color); padding:2px 6px; border-radius:4px; font-weight:700;">${note.serialRef}</code></td>
            <td><strong>${note.title}</strong></td>
            <td><div style="white-space:pre-wrap; font-size:13px; color:var(--text-muted); max-height:80px; overflow-y:auto;">${note.content}</div></td>
        `;
        tableBody.appendChild(tr);
    });
};




/* ==========================================================================
   10. DROPDOWN POPULATORS & SELECTOR HOOKS
   ========================================================================== */
EndoAppStore.populateScopeSelector = function() {
    const selector = document.getElementById('partScopeSearch');
    const vendorOptions = document.getElementById('knownVendorOptions');
    if (!selector) return;
    this.activePartScopeOptions = [];
    const activeLogs = this.serviceLogs.filter(log => this.getMirrorLifecycle(log).isActive);
    this.activePartScopeOptions = activeLogs.map(log => ({
        id: String(log.id),
        label: this.getPartScopeOption(log),
        searchText: `${log.id || ''} ${log.serialNumber || ''} ${log.scopeModel || ''}`.toLowerCase()
    }));
    this.renderActiveRepairSearchResults(selector.value);
    if (vendorOptions) {
        const vendors = this.getKnownVendors();
        vendorOptions.replaceChildren();
        vendors.forEach(vendor => {
            const option = document.createElement('option');
            option.value = vendor;
            vendorOptions.appendChild(option);
        });
    }
};


EndoAppStore.renderActiveRepairSearchResults = function(query) {
    const results = document.getElementById('activeRepairResults');
    const input = document.getElementById('partScopeSearch');
    if (!results || !input) return;
    const normalizedQuery = String(query || '').trim().toLowerCase();
    const shouldOpen = !results.hidden || document.activeElement === input;
    const matches = (this.activePartScopeOptions || []).filter(option =>
        !normalizedQuery || option.searchText.includes(normalizedQuery)
    ).slice(0, 12);
    results.replaceChildren();
    if (matches.length) {
        matches.forEach(option => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'searchable-scope-option';
            button.setAttribute('role', 'option');
            button.dataset.scopeLogId = option.id;
            button.textContent = option.label;
            results.appendChild(button);
        });
    } else {
        const empty = document.createElement('p');
        empty.className = 'searchable-scope-empty';
        empty.textContent = normalizedQuery ? 'No active repair matches that search.' : 'No active repairs are available.';
        results.appendChild(empty);
    }
    results.hidden = !shouldOpen;
    input.setAttribute('aria-expanded', String(shouldOpen));
};


EndoAppStore.populateQuickSelector = function() {
    const selector = document.getElementById('quickLinkScopeSerial');
    if (!selector) return;
    const uniqueSerials = [...new Set(this.serviceLogs.map(log => log.serialNumber))].filter(Boolean);
    selector.innerHTML = '<option value="" disabled selected>Pick active scope S/N...</option>';
    uniqueSerials.forEach(sn => {
        const option = document.createElement('option');
        option.value = sn;
        option.innerText = `S/N: ${sn}`;
        selector.appendChild(option);
    });
};


EndoAppStore.populateAdminScopeDropdown = function() {
    const selector = document.getElementById('adminNoteScopeSerial');
    if (!selector) return;
    const uniqueSerials = [...new Set(this.serviceLogs.map(log => log.serialNumber))].filter(Boolean);
    selector.innerHTML = '<option value="" disabled selected>Select scope history link...</option>';
    uniqueSerials.forEach(sn => {
        const option = document.createElement('option');
        option.value = sn;
        option.innerText = `S/N: ${sn}`;
        selector.appendChild(option);
    });
};


/* ==========================================================================
   11. SEARCH, FILTER & ACTION BUTTON BINDERS
   ========================================================================== */
EndoAppStore.bindSearchAndFilters = function() {
    const searchInput = document.getElementById('tableSearchInput');
    const statusFilter = document.getElementById('tableStatusFilter');


    if (searchInput) searchInput.addEventListener('input', () => this.renderLogTable());
    if (statusFilter) statusFilter.addEventListener('change', () => this.renderLogTable());
};


EndoAppStore.bindActionTriggers = function() {
    const exportBtn = document.getElementById('actionExportCsv');
    const printBtn = document.getElementById('actionPrintSummary');
    const queryBtn = document.getElementById('btnExecuteTimelineQuery');
    const queryInput = document.getElementById('timelineQueryInput');
    const historySearch = document.getElementById('historySearchInput');
    const editForm = document.getElementById('scopeEditForm');
    const editModal = document.getElementById('scopeEditModal');
    const logTableBody = document.getElementById('masterLogDataTableBody');
    const mirrorCards = document.getElementById('mirrorCards');
    const mirrorSearch = document.getElementById('mirrorSearchInput');
    const mirrorRefresh = document.getElementById('mirrorRefreshButton');
    const adminProcurementList = document.getElementById('adminProcurementReviewList');
    const inventoryGrid = document.getElementById('inventoryCategoryGrid');
    const inventorySearch = document.getElementById('inventorySearchInput');
    const inventoryIntakeDialog = document.getElementById('inventoryIntakeDialog');
    const inventoryIntakeOpenButton = document.getElementById('inventoryIntakeOpenButton');
    const inventoryIntakeCloseButton = document.getElementById('inventoryIntakeCloseButton');
    const consumedPartsPicker = document.getElementById('scopeConsumedPartsPicker');


    if (exportBtn) exportBtn.addEventListener('click', () => this.exportToCsvFile());
    if (printBtn) printBtn.addEventListener('click', () => window.print());
    if (inventoryIntakeOpenButton && inventoryIntakeDialog) {
        inventoryIntakeOpenButton.addEventListener('click', () => inventoryIntakeDialog.showModal());
    }
    if (inventoryIntakeCloseButton && inventoryIntakeDialog) {
        inventoryIntakeCloseButton.addEventListener('click', () => inventoryIntakeDialog.close());
    }


    if (queryBtn && queryInput) {
        queryBtn.addEventListener('click', () => {
            this.activeHistorySerial = queryInput.value.trim();
            this.generateTimelineStream(this.activeHistorySerial, historySearch ? historySearch.value : '');
        });
        queryInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.activeHistorySerial = queryInput.value.trim();
                this.generateTimelineStream(this.activeHistorySerial, historySearch ? historySearch.value : '');
            }
        });
    }
    if (historySearch) {
        historySearch.addEventListener('input', () => {
            this.generateTimelineStream(queryInput ? queryInput.value.trim() : this.activeHistorySerial, historySearch.value);
        });
    }
    if (logTableBody) {
        logTableBody.addEventListener('click', event => {
            const button = event.target.closest('[data-scope-action]');
            if (!button) return;
            const logId = button.dataset.logId;
            if (button.dataset.scopeAction === 'edit') this.openScopeEditor(logId);
            if (button.dataset.scopeAction === 'delete') this.purgeLogRecord(logId);
            if (button.dataset.scopeAction === 'request-deletion') this.requestContentDeletion(logId);
        });
    }


    const closeButton = document.getElementById('scopeEditCloseButton');
    const cancelButton = document.getElementById('scopeEditCancelButton');
    const deleteButton = document.getElementById('scopeDeleteButton');
    const requestButton = document.getElementById('scopeRequestDeletionButton');
    const partRequestButton = document.getElementById('scopePartRequestButton');
    if (closeButton) closeButton.addEventListener('click', () => this.closeScopeEditor());
    if (cancelButton) cancelButton.addEventListener('click', () => this.closeScopeEditor());
    if (editForm) editForm.addEventListener('submit', event => {
        event.preventDefault();
        this.saveScopeEditor();
    });
    if (deleteButton) deleteButton.addEventListener('click', () => this.purgeLogRecord(this.editingScopeLogId));
    if (requestButton) requestButton.addEventListener('click', () => {
        const reason = document.getElementById('scopeDeletionReason');
        this.requestContentDeletion(this.editingScopeLogId, reason ? reason.value : '');
    });
    if (partRequestButton) partRequestButton.addEventListener('click', () => this.requestPartForCurrentScope());
    if (editForm) {
        editForm.addEventListener('click', async event => {
            const consumeButton = event.target.closest('[data-consume-inventory]');
            if (!consumeButton) return;
            consumeButton.disabled = true;
            try {
                await this.consumeInventoryForScope(this.editingScopeLogId);
            } catch (error) {
                console.error('Could not link inventory to scope:', error);
                this.updateScopeConsumptionPreview(error.message || 'Could not link inventory to this scope.');
                this.showMirrorToast(error.message || 'Could not link inventory to this scope.', true);
            } finally {
                if (consumeButton.isConnected) consumeButton.disabled = false;
            }
        });
    }
    if (inventorySearch) inventorySearch.addEventListener('input', () => this.renderInventoryTable());
    if (inventoryGrid) {
        inventoryGrid.addEventListener('click', event => {
            const button = event.target.closest('[data-inventory-edit]');
            if (button) this.beginInventoryInlineEdit(button);
        });
    }
    if (consumedPartsPicker) {
        consumedPartsPicker.addEventListener('input', () => this.updateScopeConsumptionPreview());
        consumedPartsPicker.addEventListener('change', () => this.updateScopeConsumptionPreview());
    }
    if (mirrorSearch) mirrorSearch.addEventListener('input', () => this.renderScopeMirrorDashboard());
    if (mirrorRefresh) mirrorRefresh.addEventListener('click', () => this.refreshScopeMirrorFromSheets());
    if (adminProcurementList) {
        adminProcurementList.addEventListener('submit', async event => {
            const receiptForm = event.target.closest('[data-part-receipt-form]');
            if (receiptForm) {
                event.preventDefault();
                const button = receiptForm.querySelector('button[type="submit"]');
                if (button) button.disabled = true;
                try {
                    await this.savePartReceipt(receiptForm);
                } catch (error) {
                    console.error('Could not record received parts:', error);
                    this.showMirrorToast(error.message || 'Could not record received parts.', true);
                } finally {
                    if (button) button.disabled = false;
                }
                return;
            }
            const form = event.target.closest('[data-admin-part-form]');
            if (!form) return;
            event.preventDefault();
            const button = form.querySelector('button[type="submit"]');
            if (button) button.disabled = true;
            try {
                await this.saveProcurementUpdate(form);
            } catch (error) {
                console.error('Could not save procurement details:', error);
                this.showMirrorToast(error.message || 'Could not save procurement details.', true);
            } finally {
                if (button) button.disabled = false;
            }
        });
    }
    document.querySelectorAll('[data-mirror-filter]').forEach(button => {
        button.addEventListener('click', () => {
            this.mirrorTab = button.dataset.mirrorFilter;
            this.renderScopeMirrorDashboard();
            document.getElementById('mirrorCards')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    document.querySelectorAll('[data-mirror-tab]').forEach(button => {
        button.addEventListener('click', () => {
            this.mirrorTab = button.dataset.mirrorTab;
            this.renderScopeMirrorDashboard();
        });
    });
    if (mirrorCards) {
        mirrorCards.addEventListener('click', event => {
            const printReportButton = event.target.closest('[data-mirror-print-report]');
            if (printReportButton) {
                this.openServiceReportPreview(printReportButton.dataset.mirrorPrintReport);
                return;
            }
            const pickupButton = event.target.closest('[data-mirror-pickup]');
            if (pickupButton) {
                this.markScopeOutOfLab(pickupButton.dataset.mirrorPickup);
                return;
            }
            const addNoteButton = event.target.closest('[data-mirror-add-note]');
            if (addNoteButton) {
                const noteForm = [...mirrorCards.querySelectorAll('[data-mirror-quick-note-form]')]
                    .find(form => form.dataset.mirrorQuickNoteForm === addNoteButton.dataset.mirrorAddNote);
                if (!noteForm) return;
                noteForm.hidden = !noteForm.hidden;
                addNoteButton.setAttribute('aria-expanded', String(!noteForm.hidden));
                const noteActionLabel = this.getUiText(noteForm.hidden ? 'mirror_card_add_note' : 'mirror_card_close_note');
                addNoteButton.setAttribute('aria-label', noteActionLabel);
                addNoteButton.title = noteActionLabel;
                if (!noteForm.hidden) noteForm.querySelector('textarea')?.focus();
                return;
            }
            const cancelNoteButton = event.target.closest('[data-mirror-cancel-note]');
            if (cancelNoteButton) {
                const noteForm = cancelNoteButton.closest('[data-mirror-quick-note-form]');
                if (noteForm) {
                    noteForm.reset();
                    noteForm.hidden = true;
                    const addButton = noteForm.closest('.mirror-card-note-actions')?.querySelector('[data-mirror-add-note]');
                    if (addButton) {
                        const label = this.getUiText('mirror_card_add_note');
                        addButton.setAttribute('aria-label', label);
                        addButton.title = label;
                        addButton.setAttribute('aria-expanded', 'false');
                    }
                }
                return;
            }
            if (event.target.closest('button, select, input, a, label, summary, details')) return;
            const card = event.target.closest('.mirror-scope-card');
            if (card) {
                const log = this.serviceLogs.find(item => String(item.id) === String(card.dataset.logId));
                this.openScopeHistoryFromMirror(log);
            }
        });
        mirrorCards.addEventListener('keydown', event => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            if (event.target !== event.target.closest('.mirror-scope-card')) return;
            event.preventDefault();
            const card = event.target.closest('.mirror-scope-card');
            const log = this.serviceLogs.find(item => String(item.id) === String(card.dataset.logId));
            this.openScopeHistoryFromMirror(log);
        });
        mirrorCards.addEventListener('change', event => {
            const control = event.target.closest('[data-mirror-inline-field]');
            if (!control) return;
            this.updateMirrorInlineField(control.dataset.logId, control.dataset.mirrorInlineField, control.value);
        });
        mirrorCards.addEventListener('submit', async event => {
            const form = event.target.closest('[data-mirror-quick-note-form]');
            if (!form) return;
            event.preventDefault();
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) submitButton.disabled = true;
            try {
                await this.addScopeNote(form.dataset.mirrorQuickNoteForm, new FormData(form).get('note'));
            } catch (error) {
                console.error('Could not save scope note:', error);
                this.showMirrorToast(error.message || 'Could not save scope note.', true);
                if (submitButton) submitButton.disabled = false;
            }
        });
    }
    const reportPreview = document.getElementById('serviceReportPreviewModal');
    const closeReportPreview = document.getElementById('serviceReportPreviewClose');
    const cancelReportPreview = document.getElementById('serviceReportPreviewCancel');
    const confirmReportPrint = document.getElementById('serviceReportConfirmPrint');
    if (closeReportPreview) closeReportPreview.addEventListener('click', () => this.closeServiceReportPreview());
    if (cancelReportPreview) cancelReportPreview.addEventListener('click', () => this.closeServiceReportPreview());
    if (confirmReportPrint) confirmReportPrint.addEventListener('click', () => this.confirmServiceReportPrint());
    if (reportPreview) {
        reportPreview.addEventListener('input', event => {
            if (event.target.matches('textarea[data-report-field]')) this.fitServiceReportPreviewTextareas();
        });
        reportPreview.addEventListener('click', event => {
            if (event.target === reportPreview) this.closeServiceReportPreview();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && reportPreview.classList.contains('is-open')) {
                this.closeServiceReportPreview();
            }
        });
    }
    if (editModal) {
        editModal.addEventListener('click', event => {
            if (event.target === editModal) this.closeScopeEditor();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && editModal.classList.contains('is-open')) this.closeScopeEditor();
        });
    }
    window.addEventListener('beforeprint', () => this.fitServiceReportPreviewTextareas());
};


EndoAppStore.exportToCsvFile = function() {
    if (this.serviceLogs.length === 0) {
        alert('There is no log dataset active in the browser state repository to export.');
        return;
    }


    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Log ID,Timestamp,Model,Type,Serial Number,State,Complexity,Warranty,Technician,Status,Down Payment Date\n";


    this.serviceLogs.forEach(log => {
        const row = [
            `"${log.id}"`,
            `"${log.timestamp}"`,
            `"${(log.scopeModel || '').replace(/"/g, '""')}"`,
            `"${log.scopeType || ''}"`,
            `"${(log.serialNumber || '').replace(/"/g, '""')}"`,
            `"${log.scopeStatusState || ''}"`,
            `"${log.repairComplexity || ''}"`,
            `"${log.warrantyStatus || ''}"`,
            `"${(log.technicianName || '').replace(/"/g, '""')}"`,
            `"${log.inspectionStatus || ''}"`,
            `"${log.downPaymentDate || ''}"`
        ].join(",");
        csvContent += row + "\n";
    });


    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `EndoLog_Export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


EndoAppStore.initAnatomyStyleListeners = function() {
    const scrollContainer = document.querySelector('.anatomy-scroll-container');
    if (!scrollContainer) return;


    scrollContainer.addEventListener('change', (e) => {
        if (e.target.classList.contains('anatomy-status-select')) {
            e.target.setAttribute('data-outcome', e.target.value);
        }
    });


    document.querySelectorAll('.anatomy-status-select').forEach(select => {
        select.setAttribute('data-outcome', select.value);
    });
};


/* ==========================================================================
   12. MULTI-LANGUAGE LOCALIZATION ENGINE
   ========================================================================== */
EndoAppStore.bindLanguageSelectorListener = function() {
    const buttons = document.querySelectorAll('[data-app-language]');
    if (!buttons.length) return;


    const setLanguage = language => {
        if (!EndoTranslationMatrix[language]) return;
        this.activeLanguage = language;
        localStorage.setItem('endolog_pro_active_lang', this.activeLanguage);
        buttons.forEach(button => {
            const selected = button.dataset.appLanguage === language;
            button.classList.toggle('is-selected', selected);
            button.setAttribute('aria-pressed', String(selected));
        });
        this.applyGlobalLanguageTranslations();
        this.renderAll();
    };


    buttons.forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.appLanguage));
    });
    buttons.forEach(button => {
        const selected = button.dataset.appLanguage === this.activeLanguage;
        button.classList.toggle('is-selected', selected);
        button.setAttribute('aria-pressed', String(selected));
    });
};


EndoAppStore.applyGlobalLanguageTranslations = function() {
    const langDict = EndoTranslationMatrix[this.activeLanguage];
    if (!langDict) return;


    document.documentElement.lang = this.activeLanguage;


    // A. Translate all static data-trn elements
    document.querySelectorAll('[data-trn]').forEach(el => {
        const key = el.getAttribute('data-trn');
        if (langDict[key]) el.innerText = langDict[key];
    });
    document.querySelectorAll('[data-trn-placeholder]').forEach(el => {
        const key = el.getAttribute('data-trn-placeholder');
        if (langDict[key]) el.setAttribute('placeholder', langDict[key]);
    });
    document.querySelectorAll('[data-trn-aria-label]').forEach(el => {
        const key = el.getAttribute('data-trn-aria-label');
        if (langDict[key]) el.setAttribute('aria-label', langDict[key]);
    });
    document.querySelectorAll('[data-trn-title]').forEach(el => {
        const key = el.getAttribute('data-trn-title');
        if (langDict[key]) el.setAttribute('title', langDict[key]);
    });
    document.querySelectorAll('.anatomy-desc-input').forEach(input => {
        const match = input.name.match(/^anatomy_desc_(\d{2})$/);
        const placeholder = match && langDict[`anatomy_placeholder_${match[1]}`];
        if (placeholder) input.setAttribute('placeholder', placeholder);
    });
    this.syncAuthThemeToggle();
    const mirrorSearch = document.getElementById('mirrorSearchInput');
    if (mirrorSearch) mirrorSearch.setAttribute('aria-label', this.getUiText('mirror_search_label'));
    const navigationToggle = document.getElementById('mobileNavbarMenuToggle');
    const desktopNavigationToggle = document.getElementById('desktopNavbarMenuToggle');
    const navigationToggleText = document.getElementById('sidebarToggleText');
    const navigationLinks = document.getElementById('sidebarNavLinksGroup');
    const desktop = window.innerWidth >= 1024;
    const collapsed = document.getElementById('appRoot')?.classList.contains('sidebar-collapsed');
    const open = navigationLinks?.classList.contains('drawer-open');
    const mobileLabel = this.getUiText(open ? 'nav_close_menu' : 'nav_open_menu');
    const desktopLabel = this.getUiText(collapsed ? 'nav_expand' : 'nav_collapse');
    if (navigationToggle) {
        const label = desktop ? desktopLabel : mobileLabel;
        navigationToggle.setAttribute('aria-label', label);
        navigationToggle.title = label;
    }
    if (desktopNavigationToggle) {
        desktopNavigationToggle.setAttribute('aria-expanded', String(!collapsed));
        desktopNavigationToggle.setAttribute('aria-label', desktopLabel);
        desktopNavigationToggle.title = desktopLabel;
        if (navigationToggleText) navigationToggleText.textContent = desktopLabel;
    }
    if (desktop && navigationLinks) {
        navigationLinks.querySelectorAll('.menu-link').forEach(link => {
            link.title = collapsed ? link.querySelector('.menu-text')?.textContent.trim() || '' : '';
        });
    }

    const previewModal = document.getElementById('serviceReportPreviewModal');
    if (previewModal?.classList.contains('is-open') && this.reportPreviewLogId) {
        const previewLog = this.serviceLogs.find(log => String(log.id) === String(this.reportPreviewLogId));
        if (previewLog) this.renderServiceReportChecklist(previewLog, true);
    }


    // B. Translate 33 Anatomy Components
    document.querySelectorAll('.anatomy-component-card').forEach(card => {
        const idxNode = card.querySelector('.anatomy-index');
        const lblNode = card.querySelector('.anatomy-name-label');
        if (idxNode && lblNode) {
            const idx = idxNode.innerText.trim();
            if (langDict[idx]) lblNode.innerText = langDict[idx];
        }
    });


    // C. Refresh active header titles
    this.updateHeaderTitles();
};


EndoAppStore.lookupAnatomyComponentName = function(index) {
    const dict = EndoTranslationMatrix[this.activeLanguage] || EndoTranslationMatrix.en;
    const formatted = String(index).padStart(2, '0');
    return dict[formatted] || "Component " + index;
};


/* ==========================================================================
   13. MASTER RENDER COORDINATOR & LIVE CLOCK
   ========================================================================== */
EndoAppStore.renderAll = function() {
    this.renderNotifications();
    this.executePredictivePatternAnalysis();
    this.updateMetrics();
    this.renderLogTable();
    this.renderPartsTable();
    this.renderInventoryTable();
    this.populateScopeSelector();
    this.populateQuickSelector();
    this.populateAdminScopeDropdown();
    if (this.editingScopeLogId) this.renderScopeConsumedParts(this.editingScopeLogId);
};


EndoAppStore.initBackgroundRefresh = function() {
    if (!this.transitRefreshTimer) {
        this.transitRefreshTimer = window.setInterval(() => {
            if (this.currentActiveView === 'parts') this.renderPartsTransitMap();
        }, 60000);
    }
};


/* ==========================================================================
   14. INITIALIZATION ENTRY POINT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    EndoAppStore.init();
});
















// testing the new functions here
// app.js


// Function to handle the request to add a part to a scope
function requestPart(scopeId, partName) {
  var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getSheetByName("Scopes");
  var lastRow = sheet.getLastRow();
  var newRow = sheet.insertRow(lastRow + 1);
  sheet.getRange(newRow, 1).setValue(scopeId);
  sheet.getRange(newRow, 2).setValue(partName);
  sheet.getRange(newRow, 3).setValue("Requested");
  sheet.getRange(newRow, 4).setValue(new Date());
}


// Function to handle the request to add an incoming part to a scope
function addIncomingPart(scopeId, serialNumber) {
  var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getSheetByName("Scopes");
  var lastRow = sheet.getLastRow();
  var newRow = sheet.insertRow(lastRow + 1);
  sheet.getRange(newRow, 1).setValue(scopeId);
  sheet.getRange(newRow, 2).setValue(serialNumber);
  sheet.getRange(newRow, 3).setValue("Incoming");
  sheet.getRange(newRow, 4).setValue(new Date());
}


// Function to handle the request to add an outgoing part to a scope
function addOutgoingPart(scopeId, serialNumber) {
  var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getSheetByName("Scopes");
  var lastRow = sheet.getLastRow();
  var newRow = sheet.insertRow(lastRow + 1);
  sheet.getRange(newRow, 1).setValue(scopeId);
  sheet.getRange(newRow, 2).setValue(serialNumber);
  sheet.getRange(newRow, 3).setValue("Outgoing");
  sheet.getRange(newRow, 4).setValue(new Date());
}


// Function to handle the request to save a scope
function saveScope(scopeId, name, description, priority, status, endDate) {
  var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getSheetByName("Scopes");
  var lastRow = sheet.getLastRow();
  var newRow = sheet.insertRow(lastRow + 1);
  sheet.getRange(newRow, 1).setValue(scopeId);
  sheet.getRange(newRow, 2).setValue(name);
  sheet.getRange(newRow, 3).setValue(description);
  sheet.getRange(newRow, 4).setValue(priority);
  sheet.getRange(newRow, 5).setValue(status);
  sheet.getRange(newRow, 6).setValue(endDate);
}


// Function to handle the request to view the scope history
function viewScopeHistory(scopeId) {
  var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getSheetByName("Scopes");
  var range = sheet.getRange("A1:F" + sheet.getLastRow());
  var values = range.getValues();
  var history = [];
  for (var i = 1; i < values.length; i++) {
    if (values[i][0] === scopeId) {
      history.push({
        id: values[i][0],
        part: values[i][2],
        type: values[i][3],
        date: values[i][4]
      });
    }
  }
  return history;
}
