<?php

namespace App\Repository;

use App\Entity\BaseStatsm;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method BaseStatsm|null find($id, $lockMode = null, $lockVersion = null)
 * @method BaseStatsm|null findOneBy(array $criteria, array $orderBy = null)
 * @method BaseStatsm[]    findAll()
 * @method BaseStatsm[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BaseStatsmRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BaseStatsm::class);
    }

    // /**
    //  * @return BaseStatsm[] Returns an array of BaseStatsm objects
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
    public function findOneBySomeField($value): ?BaseStatsm
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
