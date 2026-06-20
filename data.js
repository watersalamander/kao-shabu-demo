// Auto-extracted verbatim from the KAO Shabu-Grill design (multilingual data).
const M=(no,th,en,lo,my,cat)=>({no,th,en,lo,my,cat});
const MENU=[
      M(11,'เนื้อสไลซ์','Sliced beef','ຊີ້ນງົວຫັ່ນ','အမဲသားလွှာ','beef'),
      M(12,'เนื้อวากิว A5','Wagyu A5','ຊີ້ນວາກິວ','ဝက်ဂျူးအမဲ','beef'),
      M(21,'หมูสไลซ์','Sliced pork','ຊີ້ນໝູຫັ່ນ','ဝက်သားလွှာ','pork'),
      M(22,'หมูสามชั้น','Pork belly','ໝູສາມຊັ້ນ','ဝက်သားသုံးထပ်','pork'),
      M(31,'กุ้งสด','Fresh shrimp','ກຸ້ງສົດ','ပုစွန်','sea'),
      M(32,'ปลาหมึก','Squid','ປາໝຶກ','ပြည်ကြီးငါး','sea'),
      M(35,'ปูอัด','Crab stick','ປູອັດ','ဂဏန်းတု','sea'),
      M(41,'ผักกาดขาว','Napa cabbage','ຜັກກາດຂາວ','ဂေါ်ဖီထုပ်','veg'),
      M(43,'เห็ดเข็มทอง','Enoki mushroom','ເຫັດເຂັມທອງ','ရွှေမှို','veg'),
      M(46,'เต้าหู้ไข่','Egg tofu','ເຕົ້າຫູ້ໄຂ່','ဥတိုဟူး','veg'),
      M(51,'วุ้นเส้น','Glass noodles','ເສັ້ນລ້ອນ','ကြာဆံ','noodle'),
      M(53,'อูด้ง','Udon','ອູດົ້ງ','အူဒွန်','noodle'),
      M(55,'ข้าวสวย','Steamed rice','ເຂົ້າສຸກ','ထမင်း','noodle'),
      M(62,'ซุปต้มยำ','Tom yum broth','ແກງຕົ້ມຍຳ','တုံယမ်ဟင်းရည်','broth'),
      M(63,'ซุปสุกี้','Sukiyaki broth','ແກງສຸກີ້','ဆုကီဟင်းရည်','broth'),
      M(71,'เกี๊ยวกุ้ง','Shrimp dumpling','ກ້ຽວກຸ້ງ','ပုစွန်ဖက်ထုပ်','side'),
      M(73,'ไข่นกกระทา','Quail egg','ໄຂ່ນົກກະທາ','ငုံးဥ','side'),
      M(83,'น้ำจิ้มแจ่ว','Spicy jaew','ແຈ່ວ','အစပ်ဆော့စ်','sauce'),
      M(91,'ชาเย็น','Thai iced tea','ຊາເຢັນ','လက်ဖက်ရည်အေး','drink'),
      M(94,'น้ำเปล่า','Water','ນ້ຳ','ရေ','drink'),
    ];
const ST={
      th:{ prep:'สถานีจัดจาน', runner:'พนักงานเสิร์ฟ', admin:'ผู้จัดการ', queue:'ในคิว', table:'โต๊ะ', round:'รอบ',
        new:'ใหม่', inprog:'กำลังจัด', markReady:'จัดครบ → พร้อมเสิร์ฟ', delivered:'ส่งแล้ว', readyToServe:'รอจัดส่ง',
        noOrders:'ไม่มีออร์เดอร์ — เคลียร์หมดแล้ว', noReady:'ไม่มีรายการรอจัดส่ง',
        availability:'สถานะเมนู (เปิด/ปิดการขาย)', soldOut:'หมด', tally:'ยอดรวมต่อโต๊ะ', items:'รายการ', rounds:'รอบ' },
      en:{ prep:'Prep station', runner:'Runner', admin:'Admin', queue:'in queue', table:'Table', round:'R',
        new:'NEW', inprog:'In progress', markReady:'All plated → ready', delivered:'Delivered', readyToServe:'Ready to deliver',
        noOrders:'All caught up — no orders', noReady:'Nothing waiting to deliver',
        availability:'Item availability', soldOut:'Sold out', tally:'Table tally', items:'items', rounds:'rounds' },
      my:{ prep:'ပြင်ဆင်ရာနေရာ', runner:'ပို့ဆောင်သူ', admin:'မန်နေဂျာ', queue:'တန်းစီ', table:'စားပွဲ', round:'အကြိမ်',
        new:'အသစ်', inprog:'ပြင်ဆင်နေသည်', markReady:'အကုန်ပြီး → အသင့်', delivered:'ပို့ပြီး', readyToServe:'ပို့ရန်အသင့်',
        noOrders:'အော်ဒါမရှိ — အကုန်ပြီးပါပြီ', noReady:'ပို့စရာမရှိ',
        availability:'မီနူး ရရှိနိုင်မှု', soldOut:'ကုန်ပြီ', tally:'စားပွဲ စုစုပေါင်း', items:'ခု', rounds:'အကြိမ်' },
      lo:{ prep:'ສະຖານີຈັດຈານ', runner:'ພະນັກງານເສີບ', admin:'ຜູ້ຈັດການ', queue:'ໃນຄິວ', table:'ໂຕະ', round:'ຮອບ',
        new:'ໃໝ່', inprog:'ກຳລັງຈັດ', markReady:'ຈັດຄົບ → ພ້ອມເສີບ', delivered:'ສົ່ງແລ້ວ', readyToServe:'ລໍຖ້າຈັດສົ່ງ',
        noOrders:'ບໍ່ມີອໍເດີ — ຈັດໝົດແລ້ວ', noReady:'ບໍ່ມີລາຍການລໍຖ້າສົ່ງ',
        availability:'ສະຖານະເມນູ', soldOut:'ໝົດ', tally:'ຍອດລວມຕໍ່ໂຕະ', items:'ລາຍການ', rounds:'ຮອບ' },
    };
const LANG_LABELS=[['my','မြန်မာ'],['lo','ລາວ'],['th','ไทย'],['en','EN']];
const STAFF_NAMES={my:'Aung',lo:'Kham',th:'สมชาย',en:'Alex'};
