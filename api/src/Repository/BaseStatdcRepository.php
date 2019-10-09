<?php

namespace App\Repository;

use App\Entity\BaseStatdc;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method BaseStat|null find($id, $lockMode = null, $lockVersion = null)
 * @method BaseStat|null findOneBy(array $criteria, array $orderBy = null)
 * @method BaseStat[]    findAll()
 * @method BaseStat[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BaseStatdcRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BaseStatdc::class);
    }

    // /**
    //  * @return BaseStat[] Returns an array of BaseStat objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?BaseStat
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
