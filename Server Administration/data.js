const quizData = {
    courseTitle: "Linux Server Administration",
    'serverAdminQuiz': {
        title: "Server Administration Quiz",
        data: [
            // --- Part 1: Fill in the Blank (الإجابات تظهر مباشرة) ---
            { type: 'fill', q: "1. Linux is ________ software, meaning it's free to use and modify, while Windows requires client access licenses.", correct: "open-source", showAnswer: true },
            { type: 'fill', q: "2. RAID stands for Redundant Array of ________ Disks.", correct: "Independent", showAnswer: true },
            { type: 'fill', q: "3. RAID 0 uses a method called ________ where data is split evenly across multiple disks.", correct: "striping", showAnswer: true },
            { type: 'fill', q: "4. ________ can survive two simultaneous disk failures by using double parity blocks.", correct: "RAID 6", showAnswer: true },
            { type: 'fill', q: "5. In LVM terminology, PV stands for ________ Volume.", correct: "Physical", showAnswer: true },
            { type: 'fill', q: "6. LVM allows administrators to take ________ for backups or testing purposes.", correct: "snapshots", showAnswer: true },

            // --- Part 2: True or False ---
            { type: 'true_false', q: "Windows Server is more lightweight and efficient than Linux in terms of resource usage.", correct: false, correction: "Linux is more lightweight and efficient; Windows requires more CPU, RAM, and disk space." },
            { type: 'true_false', q: "RAID 0 provides maximum data safety through complete redundancy.", correct: false, correction: "RAID 0 provides maximum performance but has no redundancy/safety." },
            { type: 'true_false', q: "RAID 1 provides fast write speeds and 100% usable disk space.", correct: false, correction: "RAID 1 provides data protection and fast reads, but has slower writes and results in 50% space waste." },
            { type: 'true_false', q: "LVM stands for Logical Volume Manager and provides flexible storage management.", correct: true },
            { type: 'true_false', q: "RAID 5 requires a minimum of two disks and can survive one disk failure.", correct: false, correction: "RAID 5 requires a minimum of 3+ disks and can survive one disk failure." },
            { type: 'true_false', q: "Linux uses centralised package managers while Windows requires manually downloading installers.", correct: true },
            { type: 'true_false', q: "RAID 10 combines mirroring and striping for both performance and safety.", correct: true },

            // --- Part 3: Multiple Choice / Arrangement ---
            { 
                type: 'mcq', 
                q: "Detect the minimum number of drives needed for each RAID type:", 
                options: [
                    "A. RAID 0: 2+ disks",
                    "B. RAID 1: 2+ disks",
                    "C. RAID 5: 3+ disks",
                    "D. RAID 10: 4+ drives"
                ], 
                correct: [0, 1, 2, 3] 
            },
            { 
                type: 'arrangement', 
                q: "Arrange the LVM layers from the basic layer to higher:", 
                options: [
                    "A. Physical Volume (PV)",
                    "B. Logical Volume (LV)",
                    "C. Volume Group (VG)"
                ], 
                correct_order: [0, 2, 1] // PV -> VG -> LV
            },

            // --- Part 4: Technical Terms ---
            { type: 'fill', q: "A method for combining multiple partitions on different disks into one large virtual device", correct: "RAID (Redundant Array of Independent Disks)", showAnswer: true },
            { type: 'fill', q: "The storage management system that offers enhanced flexibility, scalability, and reliability in Linux", correct: "LVM (Logical Volume Manager)", showAnswer: true },
            { type: 'fill', q: "RAID configuration that uses striping with no redundancy", correct: "RAID 0", showAnswer: true },
            { type: 'fill', q: "The LVM component that represents individual hard drives or partitions", correct: "Physical Volume (PV)", showAnswer: true },

            // --- Part 5: Short Answer ---
            { type: 'fill', q: "Two advantages of using RAID in server environments", correct: "Data redundancy/fault tolerance and Higher performance.", showAnswer: true },
            { type: 'fill', q: "Two benefits of LVM compared to traditional partition management", correct: "Flexible capacity (dynamic resizing) and Snapshots (for backups/testing).", showAnswer: true },
            { type: 'fill', q: "Two reasons why Linux might be preferred over Windows for server environments", correct: "Lower Cost (open-source) and Better Performance/Efficiency (more lightweight).", showAnswer: true },

            // --- Part 6: Analysis and Justification ---
            { type: 'fill', q: "Fault Tolerance Planning: RAID level with highest fault tolerance for large arrays and mechanism", correct: "RAID 6. It uses Double Parity (two parity blocks) to survive two simultaneous disk failures.", showAnswer: true },
            { type: 'fill', q: "System Administration Efficiency: Key Linux feature to simplify software management", correct: "Centralized Package Manager. Automates installation, updates, and dependency management from centralized repositories.", showAnswer: true }
        ]
    }
};
