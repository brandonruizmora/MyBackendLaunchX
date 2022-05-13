const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: 'Woopa' },
            update: {},
            create: {
                name: 'Woopa',
                username: 'ajolonauta',
                mission: 'Node'
            },
        });

        const woopa1 = await prisma.explorer.upsert({
            where: { name: 'Woopa1' },
            update: {},
            create: {
                name: 'Woopa1',
                username: 'ajolonauta1',
                mission: 'Node'
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: 'Woopa 2' },
            update: {},
            create: {
                name: 'Woopa 2',
                username: 'ajolonauta2',
                mission: 'Java'
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: 'Woopa 3' },
            update: {},
            create: {
                name: 'Woopa 3',
                username: 'ajolonauta3',
                mission: 'Node'
            },
        });

        console.log('Create 3 explorers');

        const mission1 = await prisma.mission.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: 'Backend Node',
                lang: 'JavaScript',
                missionCommander: 'Carlo',
                enrollments: 3,
                hasCertification: true

            }
        });

        const mission2 = await prisma.mission.upsert({
            where: { id: 2 },
            update: {},
            create: {
                name: 'Backend Java',
                lang: 'Java',
                missionCommander: 'Ferch',
                enrollments: 0,
                hasCertification: false

            }
        });

        console.log('Create 2 missions');

    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();